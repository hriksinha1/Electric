import { useCallback, useEffect, useRef, useState } from 'react';

/** Scroll-snap carousel state: tracks whether either end is reachable. */
export function useCarousel<T extends HTMLElement = HTMLDivElement>(deps: unknown[] = []) {
  const ref = useRef<T | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update, ...deps]);

  const scrollByCards = useCallback((direction: 'left' | 'right', visible = 4) => {
    const el = ref.current;
    if (!el) return;
    const count = window.innerWidth >= 1024 ? visible : 2;
    const step = el.clientWidth / count;
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  }, []);

  return { ref, canScrollLeft, canScrollRight, scrollByCards };
}
