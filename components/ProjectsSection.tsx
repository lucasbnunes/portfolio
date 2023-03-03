import React from 'react'
import { Button } from './Button'
import ProjectsGallery from './ProjectsGallery'
import { Project } from './ProjectsGallery/Project'

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className='max-w-[1920px] mx-auto px-6 xl:px-40 mt-32'>
      <h3 className='font-semibold text-3xl before:inline-block before:w-3 before:h-3 before:mr-2.5 before:bg-phantom-400 before:rounded-sm'>
        Explorando ideias
      </h3>

      <p className='mt-2 mb-16 max-w-[80ch]'>Estes são os projetos que desenvolvi com o objetivo de colocar em prática os meus conhecimentos e explorar diferentes tipos de aplicações. Cada projeto apresenta um desafio diferente e me incentiva a buscar novas tecnologias para chegar a uma solução. Espero que você goste de explorar esses projetos tanto quanto eu gostei de criá-los!</p>

      <ProjectsGallery projects={projects} />
    </section>
  )
}
