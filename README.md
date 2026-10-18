# Mohamed Ahmed Waly — React Portfolio

Personal bilingual (Arabic/English) React portfolio. Features a responsive homepage, circular photo-profile menu, skills, project case studies, and three interactive demos: Pearl Dental Clinic, Aura Commerce and Flowboard.

## Setup

```bash
npm ci
npm run lint
npm run build
npm run dev
```

## Contact / social accounts

See `src/data/socials.js`. Mohamed's verified public phone number and GitHub link are configured; Khamsat is configured from the owner-supplied URL; email is intentionally omitted since none was provided. The portrait is stored locally in `public/photos`.

## Hosting

Cloudflare Pages: production branch `main`, build command `npm run build`, output folder `dist`, Node.js 22+. Configure repo permissions from Cloudflare Pages > Connect to Git. The included `public/_redirects` serves SPA routes. You may override project links after deploying the three independent projects using `VITE_PEARL_DEMO_URL`, `VITE_AURA_DEMO_URL` and `VITE_FLOWBOARD_DEMO_URL`.

Projects are real interactive frontend demos, but **not** connected to live business services. Pearl booking is a browser-local example, Aura checkout is not a payment transaction, and Flowboard persists data locally.

Khamsat: https://khamsat.com/user/mohamed_ahmed_waly
