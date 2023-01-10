import { Button } from "./Button"
import { WordSphere } from "./WordSphere"

export function AboutSection() {
  const words = ['React', 'Next.js', 'Typescript', 'Javascript', 'Material UI', 'TailwindCSS', 'Chakra UI', 'Testes', 'Cypress', 'Jest', 'HTML', 'CSS', 'Figma', 'Acessibilidade', 'Git']

  return (
    <section className="h-full flex items-center gap-10 justify-around flex-wrap-reverse max-w-[1920px] mx-auto p-6">
      <div className="min-w-[24rem] min-h-[24rem]  md:max-w-[48rem] md:max-h-[48rem] aspect-square rounded-full mx-auto md:mx-0 flex-1">
        <WordSphere words={words} count={5} />
      </div>

      <div>
        <h1 className="font-semibold text-6xl">Lucas Brito</h1>
        <h2 className="font-medium text-3xl text-phantom-400 mt-3">Desenvolvedor front-end</h2>

        <p className="max-w-prose mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet tempora nobis dolorem modi at ullam consequuntur suscipit deleniti provident repudiandae? Pariatur fuga id vero eligendi.
        </p>

        <Button className="mt-7">Ver currículo</Button>
      </div>
    </section>
  )
}
