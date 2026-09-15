# Uwihirwe Anitha — Portfolio

A React + Tailwind CSS portfolio site, built with Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder you can deploy anywhere static (Vercel, Netlify, GitHub Pages).

## Deploy for free (recommended: Vercel)

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com, sign in with GitHub, click "New Project," and select the repo.
3. Leave the default settings (Vite is auto-detected) and click Deploy.

Netlify works the same way: drag-and-drop the `dist/` folder after `npm run build`, or connect the GitHub repo directly.

## Your photo

Your photo is already wired in at `public/photo.jpg` and shown in the hero section.
To swap it for a different photo later, just replace that file with a new image
also named `photo.jpg` (or update the `src="/photo.jpg"` path in `src/App.jsx`
under the `Hero` component if you rename it).

## Customize content

- **Projects**: edit the `projects` array at the top of `src/App.jsx` — I inferred the tech-stack tags for a couple of projects from the repo names, so double check those (`Medhub System`, `XY Shop`, `Employee Management System`) and adjust if the actual stack differs.
- **Skills**: edit the `skills` array.
- **Contact info**: edit the `Contact` component.
- **Colors/fonts**: edit `tailwind.config.js` (colors) and the Google Fonts link in `index.html` (fonts).
