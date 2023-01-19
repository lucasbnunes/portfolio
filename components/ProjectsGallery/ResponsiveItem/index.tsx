import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'
import { Project } from '../Project'
import { HorizontalItem } from './HorizontalItem';
import { VerticalItem } from './VerticalItem';
import { useWindowSize } from 'hooks/useWindowSize';

interface ResponsiveItemProps {
  project: Project
}

export default function ResponsiveItem({ project }: ResponsiveItemProps) {
  const fullConfig = resolveConfig(tailwindConfig) as any
  const screen = useWindowSize()

  if (screen.width > parseInt(fullConfig.theme.screens.md)) {
    return (
      <HorizontalItem project={project} />
    )
  }

  return (
    <VerticalItem project={project} />
  )
}