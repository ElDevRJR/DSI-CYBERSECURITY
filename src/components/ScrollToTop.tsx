import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!hash) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      const targetElement = document.getElementById(hash.replace('#', ''));
      if (targetElement) {
        if (lenis) {
          lenis.scrollTo(targetElement, { offset: -90, duration: 1.2 });
        } else {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [pathname, hash, lenis]);

  return null;
};

