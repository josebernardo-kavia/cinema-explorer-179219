# MovieAI — KAVIA Plan (Day 1)

Status: Minimal CRA-based React app with TailwindCSS, Royal Purple theme, and placeholder sections (Header, Footer, Home with Featured/Trending).

## Knowledge
- Frontend: React (Create React App), runs at http://localhost:3000.
- TailwindCSS set up via postcss.config.cjs and tailwind.config.cjs.
- Theme: Royal Purple (primary #8B5CF6, secondary #6B7280), dark background (#0b0b12).
- UI implemented:
  - Header with brand and simple navigation.
  - Home page hero “🎬 Welcome to MovieAI”.
  - Featured (4 items) and Trending (6 items) placeholder grids.
  - Refresh button for Trending (no functionality yet).
  - Footer with current year.

## Analysis (Next Steps)
- Backend (Flask) to be exposed on http://localhost:3001 with CORS enabled for http://localhost:3000.
  - Endpoints:
    - /api/hello (connectivity check)
    - /api/trending (TMDB proxy)
    - /api/search?q= (TMDB search)
- Supabase integration:
  - Auth (Google Sign-In), session handling.
  - Watchlist table (user_id, movie_id, created_at).
- TMDB integration:
  - Use TMDB API Key via environment variable.
  - Map result fields to frontend movie cards.
- Frontend service layer:
  - apiClient wrapper (baseURL: /api).
  - Services: helloService, movieService (trending, search).
- CORS policy:
  - Allow origin http://localhost:3000 from backend.
  - Use credentials when needed for auth.

## Vision
A TMDB-powered movie explorer:
- Authenticated users (Supabase) can build and sync a personal watchlist.
- Explore Featured and Trending movies, search, and get details.
- Elegant, responsive UI with Royal Purple theme and smooth interactions.

## Implementation Plan (Short)
- Backend (Flask):
  - Endpoints: 
    - GET /api/hello -> {"message":"Hello from Flask"}
    - GET /api/trending -> proxies TMDB trending
    - GET /api/search?q= -> proxies TMDB search
  - Env vars: TMDB_API_KEY, SUPABASE_URL, SUPABASE_ANON_KEY
  - CORS: allow http://localhost:3000
- Frontend (React):
  - Service layer for API calls.
  - Hook up Trending and Search UI.
  - Basic auth UI (Sign in/out).
  - Polish movie cards (posters, ratings).
- Supabase:
  - Configure project keys.
  - Implement Google sign-in flow.
  - Watchlist CRUD endpoints (via backend proxy) and UI.

## Assessment — Day 1 Checklist
- [x] Frontend shows “🎬 Welcome to MovieAI”.
- [x] Header and Footer present.
- [x] Featured and Trending placeholders with Tailwind styling.
- [x] Tailwind configuration in place (config + postcss + classes).
- [x] Planning doc committed.

Notes:
- Ensure .env has required variables on backend for TMDB & Supabase when implementing.
- Keep ports consistent: React 3000, Flask 3001.
