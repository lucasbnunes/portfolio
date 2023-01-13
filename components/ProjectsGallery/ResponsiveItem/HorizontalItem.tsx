import { Button } from "@/components/Button";
import Tags from "@/components/Tags";
import { Project } from "../Project";

interface HorizontalItemProps extends Project { }

export function HorizontalItem({ image, title, description, tags, repo, url }: HorizontalItemProps) {
  return (
    <li className='flex gap-6 [&+li]:mt-24'>
      <img src={image} alt="" className='rounded-[4px] object-fill aspect-video max-w-[420px] max-h-[236px] flex' />

      <div className='py-3 flex flex-col justify-between overflow-hidden flex-1'>
        <div>
          <h4 className='font-medium text-2xl mb-2'>{title}</h4>
          <p className='max-w-prose line-clamp-2'>{description}</p>
        </div>

        <div className="max-w-prose">

          <Tags items={tags} />
        </div>

        <div className='flex gap-6'>
          {repo && <Button href={repo}>Ver no Github</Button>}
          {url && <Button variant='filled' href={url}>Acessar demo</Button>}
        </div>
      </div>
    </li>
  )
}
