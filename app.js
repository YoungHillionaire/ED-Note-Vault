const results = document.getElementById("results");
const search = document.getElementById("search");
const categoryGrid = document.getElementById("categoryGrid");
const summary = document.getElementById("summary");
const clearSearch = document.getElementById("clearSearch");
const themeToggle = document.getElementById("themeToggle");

const CATEGORY_ORDER = [
  "All",
  "ENT",
  "Chest",
  "Cardio",
  "GI",
  "Neuro",
  "Trauma",
  "Nephro"
];

const CATEGORY_CLASS = {
  "All": "all",
  "ENT": "ent",
  "Chest": "chest",
  "Cardio": "cardio",
  "GI": "gi",
  "Neuro": "neuro",
  "Trauma": "trauma",
  "Nephro": "nephro"
};

let activeCategory = "All";

function escapeHtml(text) {
  return String(text || "").replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}

function copyText(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const old = button.textContent;
    button.textContent = "Copied";
    button.style.borderColor = "var(--green)";
    setTimeout(() => {
      button.textContent = old;
      button.style.borderColor = "var(--border)";
    }, 900);
  });
}

function buildCombined(t) {
  return [t.history, t.exam, t.mdm, t.discharge].filter(Boolean).join("\n\n");
}

function countCategory(cat) {
  if (cat === "All") return TEMPLATES.length;
  return TEMPLATES.filter(t => t.category === cat).length;
}

function renderCategories() {
  categoryGrid.innerHTML = "";

  CATEGORY_ORDER.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `cat ${CATEGORY_CLASS[cat] || "all"} ${cat === activeCategory ? "active" : ""}`;
    btn.innerHTML = `${escapeHtml(cat)}<span>${countCategory(cat)} templates</span>`;
    btn.onclick = () => {
      activeCategory = cat;
      renderCategories();
      render();
    };
    categoryGrid.appendChild(btn);
  });
}

function haystack(t) {
  return [t.category, t.title, t.keywords, t.history, t.exam, t.mdm, t.discharge]
    .join(" ")
    .toLowerCase();
}

function matches(t, query) {
  if (activeCategory !== "All" && t.category !== activeCategory) return false;

  const q = query.toLowerCase().trim();
  if (!q) return true;

  const words = q.split(/\s+/).filter(Boolean);
  const h = haystack(t);
  return words.every(w => h.includes(w));
}

function categoryBg(cat) {
  const colors = {
    "ENT": "#0891b2",
    "Chest": "#0284c7",
    "Cardio": "#dc2626",
    "GI": "#ea580c",
    "Neuro": "#2563eb",
    "Trauma": "#ca8a04",
    "Nephro": "#9333ea"
  };
  return colors[cat] || "#64748b";
}

function render() {
  const q = search.value.trim();
  const list = TEMPLATES.filter(t => matches(t, q));

  summary.textContent =
    `${list.length} template(s) shown` +
    (activeCategory !== "All" ? ` in ${activeCategory}` : "") +
    (q ? ` matching "${q}"` : "");

  results.innerHTML = "";

  if (!list.length) {
    results.innerHTML = `<div class="no-results">No templates here yet. Add one in data.js.</div>`;
    return;
  }

  list.forEach(t => {
    const card = document.createElement("article");
    card.className = "card";

    const combined = buildCombined(t);
    const blocks = [
      ["History", t.history],
      ["Physical Examination", t.exam],
      ["MDM / Differential Diagnosis", t.mdm],
      ["Discharge / Advice / Red Flags", t.discharge]
    ].filter(([_, text]) => text);

    card.innerHTML = `
      <div class="card-title" style="background:${categoryBg(t.category)}">
        <h2>${escapeHtml(t.title)}</h2>
        <div style="display:flex; align-items:center; gap:8px;">
          <div class="badge">${escapeHtml(t.category)}</div>
          <span class="chevron">▾</span>
        </div>
      </div>
      <div class="card-body"></div>
    `;

    const cardTitle = card.querySelector(".card-title");
    const cardBody = card.querySelector(".card-body");
    cardTitle.style.cursor = "pointer";
    cardTitle.onclick = () => {
      card.classList.toggle("collapsed");
    };

    const allBlock = document.createElement("div");
    allBlock.className = "block";
    allBlock.innerHTML = `
      <div class="block-head">
        <h3>Full Note Block</h3>
        <button>Copy Full</button>
      </div>
      <pre>${escapeHtml(combined)}</pre>
    `;
    allBlock.querySelector("button").onclick = e => copyText(combined, e.target);
    cardBody.appendChild(allBlock);

    blocks.forEach(([label, text]) => {
      const block = document.createElement("div");
      block.className = "block";
      block.innerHTML = `
        <div class="block-head">
          <h3>${escapeHtml(label)}</h3>
          <button>Copy</button>
        </div>
        <pre>${escapeHtml(text)}</pre>
      `;
      block.querySelector("button").onclick = e => copyText(text, e.target);
      cardBody.appendChild(block);
    });

    // start collapsed
    card.classList.add("collapsed");

    results.appendChild(card);
  });
}

clearSearch.onclick = () => {
  search.value = "";
  render();
  search.focus();
};

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "🌙";
}

search.addEventListener("input", render);

renderCategories();
render();
