# ED Note Vault

A searchable, browser-based template library for ED documentation, organized by system (Rosen-style):

- ENT
- Chest
- Cardio
- GI
- Neuro
- Trauma
- Nephro

## Current templates
- ENT: URTI / Viral Illness

All other categories are set up and ready — add templates one by one in `data.js`.

## Usage
- Open `index.html` (or your published GitHub Pages URL)
- Search by symptom/diagnosis, or filter by system using the category buttons
- Click "Copy" on any section, or "Copy Full" for the entire note
- Paste into your EMR and edit placeholders (`______` / `___`) for the actual patient

## Adding a new template
Open `data.js` and add a new object to the `TEMPLATES` array, following this structure:

```js
{
  "category": "ENT",   // ENT | Chest | Cardio | GI | Neuro | Trauma | Nephro
  "title": "Diagnosis name",
  "keywords": "search terms separated by spaces",
  "history": "...",
  "exam": "...",
  "mdm": "...",
  "discharge": "..."
}
```

Don't forget a comma after the closing `}` of the previous template.

## Deployment (GitHub Pages)
1. Upload `index.html`, `styles.css`, `data.js`, `app.js` to your repo root
2. Settings → Pages → Source: branch `main`, folder `/ (root)`
3. Visit `https://yourusername.github.io/reponame/` (or `https://yourusername.github.io` if this is your `username.github.io` repo)

## Disclaimer
Templates are starting points only. Always edit to reflect the actual patient encounter, your own findings, local guidelines, and specialist input. Do not enter patient-identifiable information into this tool.
