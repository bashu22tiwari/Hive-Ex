import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    // Handle hash change for routing
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  const renderPage = () => {
    switch (currentHash) {
      case '#/about':
        return <About />;
      case '#/services':
        return <Services />;
      case '#/contact':
        return <Contact />;
      case '#/':
      default:
        return <Home />;
    }
  };

  if (loading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-200 selection:bg-electric selection:text-midnight">
      <Navbar currentPath={currentHash} />
      
      <main className="flex-grow pt-24 pb-12 animate-page-fade">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;