import AlbumArtwork from './AlbumArtwork';

export default function Hero() {
  return (
    <section className="hero" id="album" aria-labelledby="album-title">
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <div className="hero-title-block hero-reveal">
            <h1 className="hero-title" id="album-title">
              <span className="hero-title-line">Solitary</span>{' '}
              <span className="hero-title-line hero-title-line--star">Star</span>
            </h1>
          </div>

          <div className="hero-eyebrow hero-reveal">
            <span className="hero-eyebrow-line" aria-hidden="true" />
            <p className="hero-eyebrow-label">The Messengers</p>
          </div>

          <div className="hero-actions hero-reveal">
            <p className="hero-description">A cosmic journey through sound.</p>

            <a className="button-primary hero-cta" href="#listen">
              Listen Now
              <ArrowUpRight />
            </a>

            <a className="explore-row" href="#listen">
              <span className="explore-row-label">Explore the release</span>
              <ArrowDown />
            </a>
          </div>
        </div>

        <AlbumArtwork />
      </div>
    </section>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 18 18 6M8 6h10v10" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 4v16M5 13l7 7 7-7" />
    </svg>
  );
}
