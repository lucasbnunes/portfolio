import { Button } from "./Button"
import { WordSphere } from "./WordSphere"

export type AboutData = {
  name: string,
  title: string,
  skills: string[],
  social: {
    github: string,
    linkedin: string,
  }
  summary: string,
}
interface AboutSectionProps {
  data: AboutData
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section className="min-h-screen flex items-center gap-20 justify-around flex-wrap max-w-[1920px] mx-auto p-6">

      <div>
        <h1 className="font-semibold text-6xl">{data.name}</h1>
        <h2 className="font-medium text-3xl text-phantom-400 mt-3">{data.title}</h2>

        <p className="max-w-prose mt-6">{data.summary}</p>

        <Button className="mt-7">Ver currículo</Button>
      </div>

      <div className="min-w-[24rem] min-h-[24rem] md:max-w-[48rem] md:max-h-[48rem] aspect-square rounded-full mx-auto md:mx-0 flex-1 relative">
        <div className="md:hidden h-full w-20 bg-transparent absolute left-0 z-50" />
        <WordSphere words={data.skills} count={5} />
        <div className="md:hidden h-full w-20 bg-transparent absolute top-0 right-0 z-50" />
      </div>

    </section>
  )
} 
