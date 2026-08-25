# ED Note Vault

A lightweight, browser-based template library for Emergency Department documentation.

## Current features
- Search across diagnosis names, symptoms, keywords and note content
- Filter by specialty/system category
- Expand/collapse individual templates
- Expand all / collapse all
- Copy individual sections or the full note
- Favorite frequently used templates
- Recently used templates
- Comfortable / compact viewing modes
- Persistent light/dark theme
- Mobile-responsive layout

## Categories
- ENT
- Chest
- Cardio
- GI
- Neuro
- Trauma
- MSK
- Nephro
- Handover
- Medicolegal

Each template may include History, Physical Examination, MDM/Differential Diagnosis, Discharge/Advice, and Insurance/Imaging Justification sections.

## Usage
1. Open `index.html` locally or visit the published GitHub Pages URL.
2. Search by symptom, diagnosis or keyword, or select a category.
3. Click a template title to expand it.
4. Use **Copy** for one section or **Copy full** for the complete note.
5. Edit all placeholders and statements to match the actual patient encounter before pasting into the EMR.

Keyboard shortcut: press `/` to focus the search box. Press `Esc` while searching to clear it.

## Adding a new template
Add a new object to the `TEMPLATES` array in `data.js`:

```js
{
  "category": "ENT",
  "title": "Diagnosis name",
  "keywords": "search terms separated by spaces",
  "history": "...",
  "exam": "...",
  "mdm": "...",
  "discharge": "...",
  "insurance": "..." // optional
}
```

Supported categories:
`ENT | Chest | Cardio | GI | Neuro | Trauma | MSK | Nephro | Handover | Medicolegal`

## GitHub Pages deployment
Place these files in the repository root:
- `index.html`
- `styles.css`
- `data.js`
- `app.js`

Then go to **Settings → Pages**, publish from the `main` branch and `/ (root)` folder.

## Clinical disclaimer
These templates are documentation starting points only. They do not replace clinical judgment, local policies, validated decision tools, specialty advice, or patient-specific assessment. Always edit the template to reflect the actual encounter and do not enter patient-identifiable information into the site itself.
