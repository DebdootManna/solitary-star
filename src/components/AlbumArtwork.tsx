import { useEffect, useRef } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const COARSE_POINTER_QUERY = '(hover: none), (pointer: coarse)';

export default function AlbumArtwork() {
  const shellRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const returnTimer = useRef<number | null>(null);

  useEffect(() => {
    const shell = shellRef.current;
    const tilt = tiltRef.current;

    if (!shell || !tilt) return;

    let inView = true;

    const syncPaused = () => {
      shell.dataset.paused = !inView || document.hidden ? 'true' : 'false';
    };

    const observer = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? true;
        syncPaused();
      },
      { threshold: 0.01 }
    );

    observer.observe(shell);
    document.addEventListener('visibilitychange', syncPaused);

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const coarsePointer = window.matchMedia(COARSE_POINTER_QUERY).matches;
    const tiltEnabled = !reducedMotion && !coarsePointer;

    const clearReturnTimer = () => {
      if (returnTimer.current !== null) {
        window.clearTimeout(returnTimer.current);
        returnTimer.current = null;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;

      const bounds = shell.getBoundingClientRect();
      if (bounds.width === 0 || bounds.height === 0) return;

      clearReturnTimer();
      tilt.classList.remove('is-returning');

      const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

      tilt.style.setProperty('--art-ry', `${(offsetX * 1.5).toFixed(3)}deg`);
      tilt.style.setProperty('--art-rx', `${(-offsetY * 1.5).toFixed(3)}deg`);
      tilt.style.setProperty('--art-x', `${(offsetX * 3).toFixed(2)}px`);
      tilt.style.setProperty('--art-y', `${(offsetY * 3).toFixed(2)}px`);
    };

    const handlePointerLeave = () => {
      tilt.classList.add('is-returning');
      tilt.style.setProperty('--art-rx', '0deg');
      tilt.style.setProperty('--art-ry', '0deg');
      tilt.style.setProperty('--art-x', '0px');
      tilt.style.setProperty('--art-y', '0px');

      clearReturnTimer();
      returnTimer.current = window.setTimeout(() => {
        tilt.classList.remove('is-returning');
        returnTimer.current = null;
      }, 600);
    };

    if (tiltEnabled) {
      shell.addEventListener('pointermove', handlePointerMove);
      shell.addEventListener('pointerleave', handlePointerLeave);
      shell.addEventListener('pointercancel', handlePointerLeave);
    }

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPaused);
      shell.removeEventListener('pointermove', handlePointerMove);
      shell.removeEventListener('pointerleave', handlePointerLeave);
      shell.removeEventListener('pointercancel', handlePointerLeave);
      clearReturnTimer();
    };
  }, []);

  return (
    <figure className="hero-figure">
      <div className="artwork-shell" ref={shellRef}>
        <div className="artwork-glow" aria-hidden="true" />
        <div className="artwork-tilt" ref={tiltRef}>
          <div className="artwork-drift">
            <div className="artwork-frame">
              <img
                src="/solitary-star.png"
                alt="Solitary Star album artwork: a lone castle on a mountainside beneath a swirling magenta and rose cosmic sky."
                width={1400}
                height={1400}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <figcaption className="artwork-meta">
        <span className="artwork-meta-label">Solitary Star</span>
        <span className="artwork-meta-artist">The Messengers</span>
      </figcaption>
    </figure>
  );
}
