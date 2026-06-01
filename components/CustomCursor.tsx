'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Hide cursor on mobile / narrow viewports
    const mql = window.matchMedia('(max-width: 767px)');
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };
    handleMediaChange(mql); // initial check
    mql.addEventListener('change', handleMediaChange);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const onEnterInteractive = () => setIsHovering(true);
    const onLeaveInteractive = () => setIsHovering(false);

    const interactiveSelectors = 'a, button, input, select, textarea, [data-cursor-hover]';

    document.addEventListener('mousemove', onMove);

    // Attach hover listeners
    const attachListeners = () => {
      document.querySelectorAll(interactiveSelectors).forEach(el => {
        el.addEventListener('mouseenter', onEnterInteractive);
        el.addEventListener('mouseleave', onLeaveInteractive);
      });
    };
    attachListeners();

    // Re-attach on DOM mutations (for dynamically rendered elements)
    const observer = new MutationObserver(() => {
      attachListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Lerp ring with ~0.15 smoothing factor
    let animFrame: number;
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.15);
      ringY = lerp(ringY, mouseY, 0.15);
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', onMove);
      mql.removeEventListener('change', handleMediaChange);
      observer.disconnect();
      cancelAnimationFrame(animFrame);
    };
  }, []);

  // Don't render cursor elements on mobile
  if (isMobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ mixBlendMode: 'difference' }}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? 'expanded' : ''}`}
        style={{ mixBlendMode: 'difference' }}
      />
    </>
  );
}
