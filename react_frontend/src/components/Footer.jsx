// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with current year and project name. */
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-center">
        © {year} MovieAI • Crafted with ♥ • Royal Purple Theme
      </div>
    </footer>
  );
}
