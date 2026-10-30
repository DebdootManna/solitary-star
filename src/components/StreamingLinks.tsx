import { PlatformIcon, type PlatformIconName } from './PlatformIcon';

interface Platform {
  name: string;
  icon: PlatformIconName;
  url: string;
}

// Column order follows the reference: the left column runs down the first four
// platforms, the right column the remaining four.
const platforms: Platform[] = [
  {
    name: 'Spotify',
    icon: 'spotify',
    url: 'https://open.spotify.com/album/26QlxsORL2Yh7zPt8Xh6gj?si=jChM1bieTEmSGt427h4RRw',
  },
  {
    name: 'Apple Music',
    icon: 'applemusic',
    url: 'https://music.apple.com/us/album/solitary-star/1797310730',
  },
  {
    name: 'YouTube Music',
    icon: 'youtubemusic',
    url: 'https://music.youtube.com/playlist?list=OLAK5uy_kxCrYIWW-TWI7nWocG4eFqcJZtgr-UxS4',
  },
  {
    name: 'Deezer',
    icon: 'deezer',
    url: 'https://www.deezer.com/en/album/714829131',
  },
  {
    name: 'Tidal',
    icon: 'tidal',
    url: 'https://tidal.com/browse/album/418634727',
  },
  {
    name: 'Amazon Music',
    icon: 'amazonmusic',
    url: 'https://music.amazon.com/albums/B0DXLL56L7?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_6CsiWhhX38MFBA233rhts4ZAU',
  },
  {
    name: 'Shazam',
    icon: 'shazam',
    url: 'https://www.shazam.com/album/1797310730/solitary-star',
  },
  {
    name: 'Boomplay',
    icon: 'boomplay',
    url: 'https://www.boomplay.com/albums/106678978',
  },
];

export default function StreamingLinks() {
  return (
    <section className="listen-section" id="listen" aria-labelledby="listen-title">
      <div className="page-shell">
        <div className="section-label-row">
          <p className="section-label">The Listening Room</p>
          <span className="section-label-rule" aria-hidden="true" />
        </div>

        <div className="listen-heading-row">
          <h2 className="listen-title" id="listen-title">
            Listen Anywhere
          </h2>
          <p className="listen-copy">
            Stream "Solitary Star" on your favorite music platform.
          </p>
        </div>

        <div className="platform-directory">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              className="platform-link"
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="platform-icon" aria-hidden="true">
                <PlatformIcon name={platform.icon} />
              </span>
              <span className="platform-name">{platform.name}</span>
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight() {
  return (
    <svg
      className="platform-arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 18 18 6M8 6h10v10" />
    </svg>
  );
}
