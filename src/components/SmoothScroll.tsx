import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Enables Lenis smooth scrolling for pointer devices while keeping native
 * scrolling (and instant jumps) for anyone who prefers reduced motion.
 * In-page anchors are routed through Lenis so the header links, hero CTA,
 * and skip link all land on the same 24px scroll padding defined in CSS.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let lenis: Lenis | null = null;

    const handleAnchorClick = (event: MouseEvent) => {
      if (!lenis || event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      if (anchor.target && anchor.target !== '_self') return;

      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target);
      window.history.pushState(null, '', hash);

      // Keep the skip link's focus move without interrupting the smooth scroll.
      if (target.hasAttribute('tabindex')) {
        target.focus({ preventScroll: true });
      }
    };

    const start = () => {
      if (lenis) return;

      lenis = new Lenis({
        autoRaf: true,
        duration: 1.05,
        easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
        smoothWheel: true,
        respectReducedMotion: true,
      });
      document.addEventListener('click', handleAnchorClick);
    };

    const stop = () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis?.destroy();
      lenis = null;
    };

    if (!reducedMotion.matches) start();

    const handlePreferenceChange = () => {
      if (reducedMotion.matches) stop();
      else start();
    };

    reducedMotion.addEventListener('change', handlePreferenceChange);

    return () => {
      reducedMotion.removeEventListener('change', handlePreferenceChange);
      stop();
    };
  }, []);

  return null;
}
