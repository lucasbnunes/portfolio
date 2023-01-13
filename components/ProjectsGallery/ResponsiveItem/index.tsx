import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'
import { Project } from '../Project'
import { HorizontalItem } from './HorizontalItem';
import { VerticalItem } from './VerticalItem';

interface ResponsiveItemProps extends Project { }

export default function ResponsiveItem(props: ResponsiveItemProps) {
  const fullConfig = resolveConfig(tailwindConfig) as any
  const screen = useWindowSize()

  if (screen.width > parseInt(fullConfig.theme.screens.md)) {
    return (
      <HorizontalItem {...props} />
    )
  }

  return (
    <VerticalItem {...props} />
  )
}

type WindowDimensions = {
  width: number,
  height: number,
}

function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState<WindowDimensions>({} as WindowDimensions);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
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
