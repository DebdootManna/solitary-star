/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    url: 'https://www.instagram.com/themessengersmusic/',
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-5 h-5" />,
    url: 'https://x.com/DebdootManna',
  },
  {
    name: 'YouTube',
    icon: <Youtube className="w-5 h-5" />,
    url: 'https://www.youtube.com/@themessengersstudios',
  },
];

const ArtistBio: React.FC = () => {
  const bioRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && contentRef.current) {
            contentRef.current.classList.add('opacity-100', 'translate-y-0');
            contentRef.current.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (bioRef.current) observer.observe(bioRef.current);

    return () => {
      if (bioRef.current) observer.unobserve(bioRef.current);
    };
  }, []);

  return (
    <section ref={bioRef} className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a] z-0"></div>
      
      {/* Subtle background effect */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-cyan-400 blur-[150px]"></div>
      </div>

      <div 
        ref={contentRef}
        className="max-w-3xl mx-auto relative z-10 transition-all duration-1000 opacity-0 translate-y-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">The Artist</h2>
        
        <div className="flex flex-col md:flex-row items-center bg-gray-900/60 backdrop-blur-md rounded-2xl p-6 border border-gray-800">
          {/* Artist image placeholder - circular with gradient border */}
        <div className="shrink-0 mb-6 md:mb-0 md:mr-8">
          <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-violet-600 to-cyan-400">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              <img 
                src="/the-messengers-logo-dark.png"
                alt="The Messengers Logo"
                className="w-full h-full object-cover"
              />
             </div>
          </div>
        </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">The Messengers</h3>
            <p className="text-gray-300 mb-5 leading-relaxed">
              The Messengers is an innovative music project pushing the boundaries of sound and composition. 
              Formed in 2020, the group explores cosmic themes through ambient soundscapes and melodic 
              textures. "Solitary Star" represents their most ambitious work to date, combining organic 
              instruments with electronic elements to create an immersive listening experience.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                    hover:bg-gray-700 transition-colors duration-300"
                  aria-label={link.name}
                >
                  <span className="text-white">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistBio;