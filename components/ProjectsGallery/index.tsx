import { Project } from "./Project";
import ResponsiveItem from "./ResponsiveItem";

interface ProjectsGalleryProps {
  projects: Project[]
}

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  return (
    <ul className='max-w-screen-xl'>
      {projects.map((project) => <ResponsiveItem key={project._id} project={project} />)}
    </ul>
  )
}
