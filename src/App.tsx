import SmoothScroll from './components/SmoothScroll';
import Header from './components/Header';
import Hero from './components/Hero';
import StreamingLinks from './components/StreamingLinks';
import ArtistBio from './components/ArtistBio';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <SmoothScroll />

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <StreamingLinks />
        <ArtistBio />
      </main>

      <Footer />
    </>
  );
}

export default App;
