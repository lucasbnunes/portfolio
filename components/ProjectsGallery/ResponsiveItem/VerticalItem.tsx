import { Button } from "@/components/Button";
import Tags from "@/components/Tags";
import { Project } from "../Project";

interface VerticalItemProps extends Project { }

export function VerticalItem({ image, title, description, tags, repo, url }: VerticalItemProps) {
  return (
    <li className='flex flex-col [&+li]:mt-16'>
      <div className='relative rounded-[4px] max-w-full object-fill aspect-video after:w-full after:h-full after:rounded-[inherit] after:absolute after:top-0 after:block after:bg-gradient-to-t after:from-[#00000088] after:to-[#ffffff44]'>
        <img src={image} alt="" className='rounded-[inherit] max-h-full max-w-full' />
        <h4 className='font-medium text-2xl mt-2 absolute bottom-4 left-6 text-white z-10'>{title}</h4>
      </div>

      <div className="my-4">
        <Tags items={tags} />
      </div>

      <p className='max-w-prose line-clamp-3'>{description}</p>

      <div className='flex gap-6 mt-4'>
        {repo && <Button href={repo}>Ver no Github</Button>}
        {url && <Button variant='filled' href={url}>Acessar demo</Button>}
      </div>
    </li>
  )
}
