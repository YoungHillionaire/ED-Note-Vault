# ED Note Vault

A simple searchable browser-based library of Emergency Department documentation templates.

## Features

- Search templates by diagnosis, symptom, or keyword
- Filter templates by clinical category
- Click a template title to expand or collapse it
- Copy individual sections or the full note
- Light and dark mode
- No login, database, or external dependency required

## Categories

- ENT
- Chest
- Cardio
- GI
- Neuro
- Trauma
- MSK
- Nephro
- Allergy
- Handover
- Medicolegal

Each template may contain History, Physical Examination, MDM / Differential Diagnosis, Discharge / Advice / Red Flags, and Insurance / Imaging Justification sections.

## Usage

1. Open `index.html` or the published GitHub Pages URL.
2. Search by symptom, diagnosis, or keyword, or select a category.
3. Click a template title bar to open it.
4. Click **Copy** on a section or **Copy Full** for the complete note block.
5. Paste into the EMR and edit all placeholders to reflect the actual patient encounter.

## Adding a template

Open `data.js` and add a new object to the `TEMPLATES` array using the existing objects as examples.

## GitHub Pages

Keep these files in the repository root:

- `index.html`
- `styles.css`
- `data.js`
- `app.js`

Then publish the `main` branch from the repository root in **Settings → Pages**.

## Disclaimer

Templates are starting points only. Always edit them to reflect the actual patient encounter, your own examination and clinical judgment, investigations, local policy, and specialist advice. Do not enter patient-identifiable information into this tool.
