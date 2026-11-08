import React, { useEffect, useRef, useState } from 'react';

interface Reveal3DProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/** Smooth 3D scroll-in: element rises and un-tilts when it enters the viewport. */
export const Reveal3D: React.FC<Reveal3DProps> = ({ children, delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div style={{ perspective: '1200px' }} className={className}>
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? 'translate3d(0,0,0) rotateX(0deg) scale(1)'
            : 'translate3d(0,48px,-80px) rotateX(14deg) scale(0.96)',
          transition: `opacity 0.8s ease ${delay}ms, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
          transformOrigin: '50% 100%'
        }}
        className="h-full will-change-transform"
      >
        {children}
      </div>
    </div>
  );
};
