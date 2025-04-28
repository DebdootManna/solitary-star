import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollToStreaming: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToStreaming }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center relative px-4 py-16 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E0E0E] via-[#121212] to-[#0E0E0E] z-0"></div>
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-violet-600 blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-cyan-400 blur-[100px]"></div>
      </div>

      <div className={`flex flex-col md:flex-row items-center justify-center max-w-5xl w-full z-10 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Album art container with glow effect */}
        <div className="relative mb-10 md:mb-0 md:mr-12 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-cyan-400/40 rounded-lg blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-violet-500/20">
            <img 
              src="/solitary-star.png" 
              alt="Solitary Star Album Cover" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Album title and info */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Solitary Star
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            The Messengers — A cosmic journey through sound.
          </p>
          <button 
            onClick={scrollToStreaming}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-violet-800 text-white font-medium
              shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 
              transform transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Listen Now
          </button>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToStreaming}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;