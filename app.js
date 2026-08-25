const results = document.getElementById("results");
const search = document.getElementById("search");
const categoryGrid = document.getElementById("categoryGrid");
const summary = document.getElementById("summary");
const clearSearch = document.getElementById("clearSearch");
const themeToggle = document.getElementById("themeToggle");
const favoritesToggle = document.getElementById("favoritesToggle");
const recentToggle = document.getElementById("recentToggle");
const expandAll = document.getElementById("expandAll");
const collapseAll = document.getElementById("collapseAll");
const comfortableView = document.getElementById("comfortableView");
const compactView = document.getElementById("compactView");
const toast = document.getElementById("toast");

const CATEGORY_ORDER = ["All","ENT","Chest","Cardio","GI","Neuro","Trauma","MSK","Nephro","Handover","Medicolegal"];
const CATEGORY_COLORS = {
  All: "#64748b",
  ENT: "#0f8aa6",
  Chest: "#2476c7",
  Cardio: "#c93737",
  GI: "#d97917",
  Neuro: "#4968d8",
  Trauma: "#b88a16",
  MSK: "#b7477d",
  Nephro: "#7b56c5",
  Handover: "#21867c",
  Medicolegal: "#36506f"
};

let activeCategory = "All";
let mode = "all";
let favorites = new Set(JSON.parse(localStorage.getItem("favorites") || "[]"));
let recent = JSON.parse(localStorage.getItem("recentTemplates") || "[]");

function templateId(t) {
  return `${t.category}::${t.title}`;
}

function escapeHtml(text) {
  return String(text || "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1200);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied to clipboard");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast("Copied to clipboard");
  }
}

function buildCombined(t) {
  return [t.history, t.exam, t.mdm, t.discharge, t.insurance].filter(Boolean).join("\n\n");
}

function countCategory(cat) {
  if (cat === "All") return TEMPLATES.length;
  return TEMPLATES.filter(t => t.category === cat).length;
}

function renderCategories() {
  categoryGrid.innerHTML = "";
  CATEGORY_ORDER.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `cat ${cat === activeCategory ? "active" : ""}`;
    btn.style.setProperty("--cat-color", CATEGORY_COLORS[cat] || CATEGORY_COLORS.All);
    btn.innerHTML = `<strong>${escapeHtml(cat)}</strong><span>${countCategory(cat)} template${countCategory(cat) === 1 ? "" : "s"}</span>`;
    btn.onclick = () => {
      activeCategory = cat;
      renderCategories();
      render();
    };
    categoryGrid.appendChild(btn);
  });
}

function haystack(t) {
  return [t.category, t.title, t.keywords, t.history, t.exam, t.mdm, t.discharge, t.insurance].join(" ").toLowerCase();
}

function matches(t, query) {
  if (activeCategory !== "All" && t.category !== activeCategory) return false;
  const id = templateId(t);
  if (mode === "favorites" && !favorites.has(id)) return false;
  if (mode === "recent" && !recent.includes(id)) return false;
  const q = query.toLowerCase().trim();
  if (!q) return true;
  return q.split(/\s+/).filter(Boolean).every(w => haystack(t).includes(w));
}

function markRecent(t) {
  const id = templateId(t);
  recent = [id, ...recent.filter(x => x !== id)].slice(0, 8);
  localStorage.setItem("recentTemplates", JSON.stringify(recent));
}

function toggleFavorite(t, button) {
  const id = templateId(t);
  if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
  localStorage.setItem("favorites", JSON.stringify([...favorites]));
  button.classList.toggle("active", favorites.has(id));
  button.textContent = favorites.has(id) ? "★" : "☆";
  button.setAttribute("aria-label", favorites.has(id) ? "Remove from favorites" : "Add to favorites");
  if (mode === "favorites") render();
}

function setMode(nextMode) {
  mode = mode === nextMode ? "all" : nextMode;
  favoritesToggle.setAttribute("aria-pressed", mode === "favorites");
  recentToggle.setAttribute("aria-pressed", mode === "recent");
  render();
}

function sectionBlock(label, text, full = false) {
  const block = document.createElement("div");
  block.className = "block";
  const insurance = label === "Insurance / Imaging Justification";
  block.innerHTML = `
    <div class="block-head">
      <h3 class="${insurance ? "insurance" : ""}">${escapeHtml(label)}</h3>
      <button class="copy-btn">${full ? "Copy full" : "Copy"}</button>
    </div>
    <pre>${escapeHtml(text)}</pre>
  `;
  block.querySelector("button").onclick = e => {
    e.stopPropagation();
    copyText(text);
  };
  return block;
}

function render() {
  const q = search.value.trim();
  let list = TEMPLATES.filter(t => matches(t, q));

  if (mode === "recent") {
    list.sort((a, b) => recent.indexOf(templateId(a)) - recent.indexOf(templateId(b)));
  }

  const modeLabel = mode === "favorites" ? " • favorites" : mode === "recent" ? " • recently used" : "";
  summary.textContent = `${list.length} template${list.length === 1 ? "" : "s"} shown${activeCategory !== "All" ? ` • ${activeCategory}` : ""}${modeLabel}${q ? ` • matching “${q}”` : ""}`;
  results.innerHTML = "";

  if (!list.length) {
    results.innerHTML = `<div class="no-results"><strong>No templates found</strong>Try another search, category, or filter.</div>`;
    return;
  }

  list.forEach(t => {
    const card = document.createElement("article");
    card.className = "card collapsed";
    card.style.setProperty("--cat-color", CATEGORY_COLORS[t.category] || CATEGORY_COLORS.All);
    const id = templateId(t);
    const combined = buildCombined(t);
    const blocks = [
      ["History", t.history],
      ["Physical Examination", t.exam],
      ["MDM / Differential Diagnosis", t.mdm],
      ["Discharge / Advice / Red Flags", t.discharge],
      ["Insurance / Imaging Justification", t.insurance]
    ].filter(([_, text]) => text);

    card.innerHTML = `
      <div class="card-title">
        <div class="category-rail"></div>
        <div class="title-wrap">
          <h2>${escapeHtml(t.title)}</h2>
          <div class="card-meta"><span class="badge">${escapeHtml(t.category)}</span></div>
        </div>
        <div class="card-actions">
          <button class="star-btn ${favorites.has(id) ? "active" : ""}" aria-label="${favorites.has(id) ? "Remove from favorites" : "Add to favorites"}">${favorites.has(id) ? "★" : "☆"}</button>
          <span class="chevron">▾</span>
        </div>
      </div>
      <div class="card-body"></div>
    `;

    const title = card.querySelector(".card-title");
    const body = card.querySelector(".card-body");
    const star = card.querySelector(".star-btn");

    title.onclick = e => {
      if (e.target.closest(".star-btn")) return;
      card.classList.toggle("collapsed");
      if (!card.classList.contains("collapsed")) markRecent(t);
    };
    star.onclick = e => {
      e.stopPropagation();
      toggleFavorite(t, star);
    };

    body.appendChild(sectionBlock("Full Note", combined, true));
    blocks.forEach(([label, text]) => body.appendChild(sectionBlock(label, text)));
    results.appendChild(card);
  });
}

clearSearch.onclick = () => {
  search.value = "";
  render();
  search.focus();
};

favoritesToggle.onclick = () => setMode("favorites");
recentToggle.onclick = () => setMode("recent");
expandAll.onclick = () => document.querySelectorAll(".card").forEach(card => card.classList.remove("collapsed"));
collapseAll.onclick = () => document.querySelectorAll(".card").forEach(card => card.classList.add("collapsed"));

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("theme", theme);
}

themeToggle.onclick = () => applyTheme(document.body.classList.contains("dark") ? "light" : "dark");
applyTheme(localStorage.getItem("theme") || "light");

function applyDensity(density) {
  const compact = density === "compact";
  document.body.classList.toggle("compact", compact);
  comfortableView.classList.toggle("active", !compact);
  compactView.classList.toggle("active", compact);
  localStorage.setItem("density", density);
}

comfortableView.onclick = () => applyDensity("comfortable");
compactView.onclick = () => applyDensity("compact");
applyDensity(localStorage.getItem("density") || "comfortable");

search.addEventListener("input", render);
document.addEventListener("keydown", e => {
  if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    e.preventDefault();
    search.focus();
  }
  if (e.key === "Escape" && document.activeElement === search) {
    search.value = "";
    render();
    search.blur();
  }
});

renderCategories();
render();
