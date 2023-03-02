import { Button } from "@/components/Button";
import Tags from "@/components/Tags";
import { Project } from "../Project";

interface VerticalItemProps {
  project: Project
}

export function VerticalItem({ project }: VerticalItemProps) {
  return (
    <li className='flex flex-col [&+li]:mt-16'>
      <div className='relative rounded-[4px] max-w-full after:w-full after:h-full after:rounded-[inherit] after:absolute after:top-0 after:block after:bg-gradient-to-t after:from-[#00000088] after:to-[#ffffff44]'>
        <img src={project.image} alt="" className='rounded-[inherit] max-h-full max-w-full object-fill aspect-video' />
        <h4 className='font-medium text-2xl mt-2 absolute bottom-4 left-6 text-white z-10'>{project.title}</h4>
      </div>

      <div className="my-4">
        <Tags items={project.tags} />
      </div>

      <p className='max-w-prose line-clamp-3'>{project.description}</p>

      <div className='flex gap-6 mt-4'>
        {project.urls.repository && <Button href={project.urls.repository} openLinkInNewTab>Ver no Github</Button>}
        {project.urls.demo && <Button variant='filled' href={project.urls.demo} openLinkInNewTab>Acessar demo</Button>}
      </div>
    </li>
  )
}
