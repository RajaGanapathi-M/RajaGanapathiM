import { useEffect, useRef } from 'react';

/**
 * useScrollReveal - Attaches an IntersectionObserver to the returned ref.
 * All children with class "reveal" inside that ref will animate in when visible.
 */
export default function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const targets = el.querySelectorAll('.reveal');
    targets.forEach(t => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return { ref };
}
