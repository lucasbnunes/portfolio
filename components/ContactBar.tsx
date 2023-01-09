import { LinkedinFill, GithubFill } from 'akar-icons'
import React from 'react'

export function ContactBar() {
  return (
    <nav className="bg-white flex gap-6 px-6 py-6 justify-end lg:flex-col lg:justify-center sticky top-0 left-0 lg:fixed lg:h-screen z-50">
      <a href="https://linkedin.com/in/lucasbnunes">
        <LinkedinFill size="2rem" />
      </a>
      <a href="https://github.com/lucasbnunes">
        <GithubFill size="2rem" />
      </a>
    </nav>
  )
}
