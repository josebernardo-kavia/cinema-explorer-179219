# MovieAI Frontend (Day 1 - Minimal)

Elegant, minimal React app using TailwindCSS with the Royal Purple theme.

## Quickstart

1) Install dependencies
- Node 18+ recommended
- From this folder:
```
npm install
```

2) Run the development server (port 3000)
```
npm start
```
Open http://localhost:3000

3) TailwindCSS setup confirmation
- Tailwind is configured via `tailwind.config.cjs` and `postcss.config.cjs`.
- Global utilities are imported in `src/index.css` using:
  - `@tailwind base;`
  - `@tailwind components;`
  - `@tailwind utilities;`
- The UI uses Tailwind utility classes. You should see:
  - Header with “🎬 MovieAI”
  - Hero title “🎬 Welcome to MovieAI”
  - Featured and Trending placeholder grids

4) Upcoming backend (port 3001)
- A Flask backend will be available on http://localhost:3001
- CORS will be enabled to allow requests from http://localhost:3000
- Frontend will fetch data from endpoints such as `/api/hello`, `/api/trending`, `/api/search`

## Scripts

- `npm start` — Start CRA dev server on port 3000
- `npm run build` — Production build
- `npm test` — Run tests

## Theme

- Primary: `#8B5CF6` (Royal Purple)
- Secondary: `#6B7280`
- Background: `#0b0b12` (dark)
- Subtle rounded corners and soft shadows across components

Refer to `KAVIA_PLAN_DAY1.md` for planning details and next steps.
