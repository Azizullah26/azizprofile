import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { Navbar, Hero, About, Experience, Tech, Projects, Integrations, Contact, StarsCanvas } from './components';
import TechPage from './components/TechPage';
import ProjectsPage from './components/ProjectsPage';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Preload critical images
    const preloadImages = [
      '/src/assets/GitpodAutonomy.png',
      '/src/assets/home-integrations copy copy.png'
    ];

    const imagePromises = preloadImages.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setContentLoaded(true);
        // Reduced loading time for better UX
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
      .catch(() => {
        // Even if images fail to load, continue
        setContentLoaded(true);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      });
  }, []);

  // Enhanced loading screen
  if (loading) {
    return (
      <AnimatePresence>
        <motion.div 
          className="flex flex-col justify-center items-center h-screen bg-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="canvas-loader mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-white text-lg font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Loading Experience...
          </motion.p>
          <motion.div
            className="w-64 h-1 bg-gray-700 rounded-full mt-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <BrowserRouter>
      <motion.div 
        className="relative z-0 bg-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/tech" element={<TechPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/" element={
            <>
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Projects />
              <Integrations />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />
        </Routes>
      </motion.div>
    </BrowserRouter>
  );
};

export default App;