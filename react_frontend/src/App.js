import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// PUBLIC_INTERFACE
function App() {
  /** Root application layout wrapping header, home page, and footer. */
  return (
    <div className="min-h-screen bg-[#0b0b12] text-gray-100 flex flex-col">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
