import { LinkedinFill, GithubFill } from 'akar-icons'
import React from 'react'

export function ContactBar() {
  return (
    <aside className="flex flex-col justify-center gap-6 px-6">
      <a href="https://linkedin.com/in/lucasbnunes">
        <LinkedinFill />
      </a>
      <a href="https://github.com/lucasbnunes">
        <GithubFill />
      </a>
    </aside>
  )
}
