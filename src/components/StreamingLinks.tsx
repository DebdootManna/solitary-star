import React, { useEffect, useRef } from 'react';
import { 
  Music, 
  Youtube, 
  Radio, 
  Headphones, 
  ShoppingBag, 
  Heart, 
  Disc, 
  Music2 
} from 'lucide-react';

// Streaming platforms data
const streamingPlatforms = [
  {
    name: 'Spotify',
    icon: <Music className="w-5 h-5" />,
    color: '#1DB954',
    url: 'https://open.spotify.com/album/26QlxsORL2Yh7zPt8Xh6gj?si=jChM1bieTEmSGt427h4RRw',
  },
  {
    name: 'Apple Music',
    icon: <Music2 className="w-5 h-5" />,
    color: '#FA2C56',
    url: 'https://music.apple.com/us/album/solitary-star/1797310730',
  },
  {
    name: 'YouTube Music',
    icon: <Youtube className="w-5 h-5" />,
    color: '#FF0000',
    url: 'https://music.youtube.com/playlist?list=OLAK5uy_kxCrYIWW-TWI7nWocG4eFqcJZtgr-UxS4',
  },
  {
    name: 'Deezer',
    icon: <Headphones className="w-5 h-5" />,
    color: '#00C7F2',
    url: 'https://www.deezer.com/en/album/714829131',
  },
  {
    name: 'Tidal',
    icon: <Disc className="w-5 h-5" />,
    color: '#000000',
    url: 'https://tidal.com/browse/album/418634727',
  },
  {
    name: 'Amazon Music',
    icon: <ShoppingBag className="w-5 h-5" />,
    color: '#00A8E1',
    url: 'https://amazon.com/music/player/albums/B0DXLL56L7?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_q8tUc0q8ZMueqERzTS409FSO4',
  },
  {
    name: 'Shazam',
    icon: <Heart className="w-5 h-5" />,
    color: '#08F',
    url: 'https://www.shazam.com/album/1797310730/solitary-star',
  },
  {
    name: 'Boomplay',
    icon: <Radio className="w-5 h-5" />,
    color: '#E83C38',
    url: 'https://www.boomplay.com/albums/105291686',
  },
];

interface StreamingLinksProps {
  streamingRef: React.RefObject<HTMLDivElement>;
}

const StreamingLinks: React.FC<StreamingLinksProps> = ({ streamingRef }) => {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section ref={streamingRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-[#0E0E0E] z-0"></div>
      <div className="absolute opacity-10 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-0 left-1/3 w-40 h-40 rounded-full bg-gold-400 blur-[120px]"></div>
        <div className="absolute bottom-1/2 right-1/3 w-60 h-60 rounded-full bg-violet-700 blur-[150px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">Listen Anywhere</h2>
        <p className="text-gray-400 text-center mb-16 max-w-md mx-auto">
          Stream "Solitary Star" on your favorite music platform
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {streamingPlatforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (cardsRef.current[index] = el)}
              className={`
                bg-gray-900/60 backdrop-blur-sm rounded-xl p-5 flex items-center
                transform transition-all duration-500 ease-out 
                hover:scale-105 hover:bg-gray-800/80 hover:shadow-lg 
                hover:shadow-[${platform.color}]/10
                opacity-0 translate-y-8
                border border-gray-800 hover:border-gray-700
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center mr-4" 
                style={{ backgroundColor: `${platform.color}20` }}
              >
                <span className="text-white">{platform.icon}</span>
              </div>
              <span className="text-white font-medium">{platform.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingLinks;