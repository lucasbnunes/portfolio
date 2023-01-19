import React from 'react';

type WindowDimensions = {
  width: number;
  height: number;
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState<WindowDimensions>(
    {} as WindowDimensions
  );

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  return windowSize;
}
