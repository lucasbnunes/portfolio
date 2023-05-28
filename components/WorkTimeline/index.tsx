import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import React from "react";
import { Line } from "./Line";
import { WorkExperience, WorkExperienceItem } from "./WorkExperienceItem";

interface WorkTimelineProps {
  experiences: WorkExperience[]
}

export function WorkTimeline({ experiences }: WorkTimelineProps) {
  const { isVisible, elementRef } = useIntersectionObserver({ endWhenVisible: true })

  return (
    <div ref={elementRef} className={`mt-16 py-12 relative flex flex-col gap-14 lg:gap-24 ${isVisible ? "opacity-1" : "opacity-0"}`}>
      <Line isVisible={isVisible} />
      {experiences.map((workXp, index) => <WorkExperienceItem workExperience={workXp} align={index % 2 === 0 ? 'left' : 'right'} delay={index * 600} isVisible={isVisible} />)}

      {/*<WorkExperienceItem align="right" delay={600} isVisible={isVisible} />*/}
    </div>
  )
}