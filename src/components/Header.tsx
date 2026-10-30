export default function Header() {
  return (
    <header className="site-header">
      <div className="page-shell site-header-inner">
        <a className="wordmark" href="#album" aria-label="The Messengers — back to the album">
          THE MESSENGERS
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav-list">
            <li>
              <a className="site-nav-link" href="#listen">
                Listen
              </a>
            </li>
            <li>
              <a className="site-nav-link" href="#artist">
                The Artist
                <ArrowUpRight />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
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
