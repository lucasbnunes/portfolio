import { Dot } from "./Dot"

interface WorkExperienceItem {
  align: "left" | "right",
  delay: number,
  isVisible: boolean,
}

const CONTAINER_STYLES = {
  left: "pr-12",
  right: "lg:ml-auto lg:pl-12"
}

const CONTENT_STYLES = {
  left: "lg:ml-auto",
  right: "lg:mr-auto"
}

export function WorkExperienceItem({ align, delay, isVisible }: WorkExperienceItem) {
  return (
    <div className={`ml-6 lg:w-1/2 relative ${CONTAINER_STYLES[align]} ${isVisible ? "animate-fade-in" : ""}`} style={{ animationDelay: delay + "ms" }} >
      <Dot align={align} />
      <div className={`max-w-prose lg:max-w-md ${CONTENT_STYLES[align]}`} >
        <h4 className="font-semibold text-2xl">Lorem ipsum dolor.</h4>
        <h5 className="font-medium text-lg text-phantom-600 mb-2 inline-block">Lorem</h5> <span className="text-phantom-600">(01/2022 - Atual)</span>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nemo illo voluptatum, sequi consequuntur vero odio distinctio iure, deserunt odit mollitia officia, beatae nostrum blanditiis sed soluta quasi. Provident, impedit.</p>
      </div>
    </div>
  )
}
