import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { NavRoute } from './types';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-slate-200 selection:bg-electric selection:text-midnight">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-12 animate-page-fade">
          <Routes>
            <Route path={NavRoute.HOME} element={<Home />} />
            <Route path={NavRoute.ABOUT} element={<About />} />
            <Route path={NavRoute.SERVICES} element={<Services />} />
            <Route path={NavRoute.CONTACT} element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to={NavRoute.HOME} replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;