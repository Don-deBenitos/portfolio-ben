import { useEffect, useRef, useState } from 'react';

const EASE = [0.35, 0.28, 0.22, 0.18, 0.14, 0.1];
const BUBBLES = 6;

export default function Cursor() {
  const wrapRef = useRef(null);
  const bubblesRef = useRef([]);
  const [hover, setHover] = useState(false);
  const mouse = useRef({ x: -100, y: -100 });
  const positions = useRef(Array.from({ length: BUBBLES }, () => ({ x: -100, y: -100 })));

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    const cursor = wrapRef.current;
    if (!cursor) return;
    document.body.classList.add('cursor-active');

    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const handleLeave = () => {
      mouse.current = { x: -100, y: -100 };
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);

    const targets = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    const onEnter = () => setHover(true);
    const onLeave = () => setHover(false);
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    let raf;
    const tick = () => {
      const bubbles = bubblesRef.current;
      const pos = positions.current;
      for (let i = 0; i < BUBBLES; i++) {
        const targetX = i === 0 ? mouse.current.x : pos[i - 1].x;
        const targetY = i === 0 ? mouse.current.y : pos[i - 1].y;
        pos[i].x += (targetX - pos[i].x) * EASE[i];
        pos[i].y += (targetY - pos[i].y) * EASE[i];
        if (bubbles[i]) {
          bubbles[i].style.left = `${pos[i].x}px`;
          bubbles[i].style.top = `${pos[i].y}px`;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      cancelAnimationFrame(raf);
      document.body.classList.remove('cursor-active');
    };
  }, []);

  const sizes = [14, 12, 10, 9, 8, 6];

  return (
    <div
      ref={wrapRef}
      className={`fixed left-0 top-0 w-0 h-0 pointer-events-none z-[9999] cursor-wrap ${hover ? 'hover' : ''}`}
      aria-hidden="true"
      style={{ transform: 'none' }}
    >
      {Array.from({ length: BUBBLES }, (_, i) => (
        <span
          key={i}
          ref={(el) => (bubblesRef.current[i] = el)}
          className="cursor-bubble-custom fixed"
          data-i={i}
          style={{
            width: sizes[i],
            height: sizes[i],
            opacity: i === 0 ? 1 : [0.9, 0.75, 0.6, 0.45, 0.3][i - 1],
          }}
        />
      ))}
    </div>
  );
}
