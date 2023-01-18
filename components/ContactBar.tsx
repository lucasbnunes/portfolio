import React from 'react'
import { LinkedinFill, GithubFill } from 'akar-icons'
import { useContactBarContext } from 'contexts/ContactBarContext'

export function ContactBar() {
  const { socialMediaLinks } = useContactBarContext()

  return (
    <nav className="bg-white flex gap-6 px-6 py-6 justify-end lg:flex-col lg:justify-center sticky top-0 left-0 lg:fixed lg:h-screen z-50">
      <a href={socialMediaLinks.linkedin}>
        <LinkedinFill size="2rem" aria-hidden="true" />
        <span className="sr-only">Visitar linkedin</span>
      </a>
      <a href={socialMediaLinks.github}>
        <GithubFill size="2rem" aria-hidden="true" />
        <span className="sr-only">Visitar github</span>
      </a>
    </nav>
  )
}
