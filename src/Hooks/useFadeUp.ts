import { useEffect, useRef, useState } from "react";

/**
 * A global fade-up animation hook for Framer Motion v12+
 * Returns:
 *  - ref → attach to element
 *  - animateProps → spread into <motion.div {...animateProps} />
 */
export function useFadeUp(delay: number = 0) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    animateProps: {
      initial: { opacity: 0, y: 28 },
      animate: visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
      transition: {
        duration: 0.55,
        ease: "easeOut",
        delay,
      },
    },
  };
}
