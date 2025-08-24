import React from 'react';
import { motion } from 'framer-motion';

// Optimized AnimatedLines component
const AnimatedLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
      {/* Horizontal flowing lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-40"
          style={{
            top: `${15 + i * 10}%`,
            width: '200px',
            left: '-200px',
          }}
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: ['calc(0px)', `calc(100vw + 400px)`],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Diagonal flowing lines */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`diagonal-${i}`}
          className="absolute w-px h-32 bg-gradient-to-b from-transparent via-[#00cea8] to-transparent opacity-30"
          style={{
            left: `${10 + i * 20}%`,
            top: '-128px',
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: ['calc(0px)', `calc(100vh + 256px)`],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: 5 + i * 0.2,
            repeat: Infinity,
            delay: i * 1,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Pulsing dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full bg-[#915EFF]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Lazy loading component for hero background
const HeroBackground: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <motion.div 
      className="absolute inset-0 z-0"
      initial={{ scale: 1.05, opacity: 0 }}
      animate={{ 
        scale: isLoaded ? 1 : 1.05, 
        opacity: isLoaded ? 1 : 0 
      }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-tertiary to-primary animate-pulse" />
      )}
      <img
        src="/src/assets/GitpodAutonomy.png"
        alt="Development Environment"
        className={`w-full h-full object-contain object-center transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        loading="eager"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Animated futuristic lines overlay */}
      {isLoaded && <AnimatedLines />}
    </motion.div>
  );
};
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <HeroBackground />

      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 z-10">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="hero-heading">
            Hi, I'm <span className="text-[#915EFF]">Aziz</span>
          </h1>
          <motion.p 
            className="hero-subtext mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Full Stack Developer & <br className="sm:block hidden" />
            AI Business Solutions Expert
          </motion.p>
          <motion.p 
            className="text-secondary mt-4 text-lg max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Based in Dubai, I develop innovative web applications, 
            integrate AI models, and create business solutions that 
            transform ideas into reality.
          </motion.p>
        </motion.div>
      </div>

      <motion.div 
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;