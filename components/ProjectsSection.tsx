import React from 'react'
import { Button } from './Button'
import ProjectsGallery from './ProjectsGallery'
import { Project } from './ProjectsGallery/Project'

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className='max-w-[1920px] mx-auto px-6 xl:px-40'>
      <h3 className='font-semibold text-3xl before:inline-block before:w-3 before:h-3 before:mr-2.5 before:bg-phantom-400 before:rounded-sm'>
        Projetos
      </h3>
      <p className='mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit, soluta praesentium, odio asperiores error aliquid.</p>

      <ProjectsGallery projects={projects} />
    </section>
  )
}
