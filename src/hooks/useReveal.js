import { useEffect, useRef, useState } from 'react';

const REVEAL_POINT = 100;

export function useReveal(delay = 0) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      const windowHeight = window.innerHeight;
      const { top } = el.getBoundingClientRect();
      if (top < windowHeight - REVEAL_POINT) {
        setActive(true);
      }
    };

    reveal();
    window.addEventListener('scroll', reveal);
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return [ref, active];
}
