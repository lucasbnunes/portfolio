import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import React from "react";
import { Line } from "./Line";
import { WorkExperienceItem } from "./WorkExperienceItem";

export function WorkTimeline() {
  const { isVisible, elementRef } = useIntersectionObserver({ endWhenVisible: true })

  return (
    <div ref={elementRef} className={`my-24 py-12 relative flex flex-col gap-24 ${isVisible ? "opacity-1" : "opacity-0"}`}>
      <Line isVisible={isVisible} />
      <WorkExperienceItem align="left" delay={0} isVisible={isVisible} />
      <WorkExperienceItem align="right" delay={600} isVisible={isVisible} />
    </div>
  )
}