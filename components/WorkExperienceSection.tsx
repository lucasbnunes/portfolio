import { WorkTimeline } from "./WorkTimeline";

export function WorkExperienceSection() {
  return (
    <div className="max-w-[1920px] px-6 xl:px-40 mx-auto my-9">
      <h3 className='font-semibold text-3xl before:inline-block before:w-3 before:h-3 before:mr-2.5 before:bg-phantom-400 before:rounded-sm'>
        Experiência profissional
      </h3>

      <WorkTimeline />
    </div>
  )
}