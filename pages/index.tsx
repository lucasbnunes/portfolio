import { WordSphere } from "@/components/WordSphere";

export default function Home() {
  const words = ['React', 'Next.js', 'Typescript', 'Javascript', 'Material UI', 'TailwindCSS', 'Chakra UI', 'Testes', 'Cypress', 'Jest', 'HTML', 'CSS', 'Figma', 'Acessibilidade']


  return (
    <section className="min-h-screen flex items-center justify-between flex-wrap-reverse max-w-screen-2xl mx-auto">
      <div className="w-[600px] h-[600px] overflow-visible">
        <WordSphere words={words} count={5} />
      </div>

      <div>
        <h1 className="font-medium text-6xl">Lucas Brito</h1>
        <h2 className="font-medium text-3xl text-phantom-400 mt-3">Desenvolvedor front-end</h2>

        <p className="max-w-prose mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet tempora nobis dolorem modi at ullam consequuntur suscipit deleniti provident repudiandae? Pariatur fuga id vero eligendi.
        </p>

        <button className="border-2 border-phantom-900 rounded-sm font-semibold px-6 py-2 mt-7">Ver currículo</button>
      </div>
    </section>
  )
}
