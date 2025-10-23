import MovieCard from "../components/MovieCard";

// PUBLIC_INTERFACE
export default function Home() {
  /** Home page with hero heading, Featured and Trending placeholder sections. */
  const featured = [
    "The Purple Horizon",
    "Echoes of Stardust",
    "Velvet Night",
    "Aurora Dreams"
  ];
  const trending = [
    "Neon Mirage",
    "Silent Skies",
    "Elysium Drift",
    "Quantum Hearts",
    "Silver Lining",
    "Crimson Echo"
  ];

  return (
    <div id="home" className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-royal to-fuchsia-500 bg-clip-text text-transparent">
          🎬 Welcome to MovieAI
        </h1>
        <p className="mt-3 sm:mt-4 text-gray-400 max-w-2xl mx-auto">
          Discover featured picks and explore what’s trending. Seamless, elegant,
          and ready for TMDB-powered magic.
        </p>
      </section>

      {/* Featured */}
      <section id="featured" className="mt-10 sm:mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">Featured</h2>
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((t, i) => (
            <MovieCard key={i} title={t} tag="Featured" />
          ))}
        </div>
      </section>

      {/* Trending */}
      <section id="trending" className="mt-10 sm:mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">
            Trending Movies
          </h2>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium border border-gray-700 bg-gray-900 hover:border-royal/60 hover:text-white hover:shadow-soft text-gray-300 transition-colors"
            aria-label="Refresh trending movies (placeholder)"
            onClick={() => {}}
          >
            ⟳ Refresh
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {trending.map((t, i) => (
            <MovieCard key={i} title={t} tag="Trending" />
          ))}
        </div>
      </section>
    </div>
  );
}
