import { useEffect, useLayoutEffect, useCallback, useState } from 'react';

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    let resizeTimer;
    function handleScreenResize() {
      setScreenWidth(window.innerWidth);
    };

    function resizeController() {
      if (!resizeTimer) {
        resizeTimer = setTimeout(() => {
          resizeTimer = null;
          handleScreenResize();
        }, 1000);
      }
    };

    window.addEventListener('resize', resizeController);
    handleScreenResize();
    return () => window.removeEventListener('resize', resizeController); 
  }, []);

  return screenWidth;
}
