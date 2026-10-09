# Sumansh Yadav — Portfolio

A responsive, cinematic developer portfolio built with React + Vite, React Router, Framer Motion, and Lucide icons. It includes Home, About, Projects, individual project case studies, and Contact pages.

## Requirements
- Node.js 20.19+ or a compatible current LTS release
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```
Vite outputs the production site to `dist/`.

## Personalize before publishing
1. Put your actual PDF résumé at `public/resume.pdf`. The home-page download button points there.
2. In `src/App.jsx`, replace the generic GitHub URL on each project with that project's exact repository URL.
3. Replace the LinkedIn URL with your real profile URL.
4. Verify every feature listed for each project and adjust descriptions to match the deployed implementation.
5. Add screenshots or a live demo URL for each project when available. Current dashboard visuals are CSS-built concept mockups, not screenshots of production apps.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy. The included `public/_redirects` is useful for Netlify; for Vercel, add a `vercel.json` rewrite if direct navigation to nested routes returns 404.

Example `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## Deploy to Netlify
1. Import the repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The included `public/_redirects` file enables SPA route fallback.

## Notes
- This is a frontend-only portfolio. Contact uses `mailto:` and the email-copy button uses the browser clipboard API.
- The light/dark toggle is client-side only.
- The abstract 3D-inspired centerpiece is CSS geometry with Framer Motion transforms; no WebGL library is required.
- Check the final site on mobile and desktop, and test all links before sharing with recruiters.


## Personal avatar
The cinematic avatar is stored at `public/sumansh-avatar.png` and used in the home-page hero. Replace that file with another image using the same filename to update it without changing the React component.
