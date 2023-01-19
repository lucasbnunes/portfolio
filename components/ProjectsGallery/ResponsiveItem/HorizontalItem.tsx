import { Button } from "@/components/Button";
import Tags from "@/components/Tags";
import { Project } from "../Project";

interface HorizontalItemProps {
  project: Project
}

export function HorizontalItem({ project }: HorizontalItemProps) {
  return (
    <li className='flex gap-6 [&+li]:mt-24'>
      <img src={project.image} alt="" className='rounded-[4px] object-fill aspect-video max-w-[432px] max-h-[243px] shadow-md' />

      <div className='py-3 flex flex-col justify-between overflow-hidden flex-1'>
        <div>
          <h4 className='font-medium text-2xl mb-2'>{project.title}</h4>
          <p className='max-w-prose line-clamp-2'>{project.description}</p>
        </div>

        <div className="max-w-prose">

          <Tags items={project.tags} />
        </div>

        <div className='flex gap-6'>
          {project.urls.repository && <Button href={project.urls.repository} openLinkInNewTab>Ver no Github</Button>}
          {project.urls.demo && <Button variant='filled' href={project.urls.demo} openLinkInNewTab>Acessar demo</Button>}
        </div>
      </div>
    </li>
  )
}
