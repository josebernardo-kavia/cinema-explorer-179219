// PUBLIC_INTERFACE
export default function Header() {
  /** Header bar displaying brand and basic navigation links. */
  return (
    <header className="sticky top-0 z-20 bg-gray-950/90 backdrop-blur border-b border-gray-800 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl select-none">🎬</span>
          <span className="text-xl font-semibold text-royal">MovieAI</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#home" className="text-gray-300 hover:text-royal transition-colors">Home</a>
          <a href="#featured" className="text-gray-300 hover:text-royal transition-colors">Featured</a>
          <a href="#trending" className="text-gray-300 hover:text-royal transition-colors">Trending</a>
        </nav>
      </div>
    </header>
  );
}
