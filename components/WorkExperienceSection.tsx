import { WorkTimeline } from "./WorkTimeline";
import { WorkExperience } from "./WorkTimeline/WorkExperienceItem";

interface WorkTimelineProps {
  experiences: WorkExperience[]
}

export function WorkExperienceSection({ experiences }: WorkTimelineProps) {
  return (
    <div className="max-w-[1920px] px-6 xl:px-40 mx-auto mt">
      <h3 className='font-semibold text-3xl before:inline-block before:w-3 before:h-3 before:mr-2.5 before:bg-phantom-400 before:rounded-sm'>
        Jornada profissional
      </h3>

      <WorkTimeline experiences={experiences} />
    </div>
  )
}