import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const firstLoad = useRef(true);

  // Disable browser scroll restoration ONCE
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Skip initial mount (important)
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    let attempts = 0;
    const maxAttempts = 10;

    const forceScrollTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Run immediately
    forceScrollTop();

    // Re-assert scroll for async layout shifts
    const interval = setInterval(() => {
      forceScrollTop();
      attempts += 1;
      if (attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [location.pathname]);

  return null;
}
