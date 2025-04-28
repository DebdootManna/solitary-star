import React, { useRef } from 'react';
import Hero from './components/Hero';
import StreamingLinks from './components/StreamingLinks';
import ArtistBio from './components/ArtistBio';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  const streamingRef = useRef<HTMLDivElement>(null);

  const scrollToStreaming = () => {
    streamingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white font-sans">
      <Hero scrollToStreaming={scrollToStreaming} />
      <StreamingLinks streamingRef={streamingRef} />
      <ArtistBio />
      <Footer />
    </div>
  );
}

export default App;