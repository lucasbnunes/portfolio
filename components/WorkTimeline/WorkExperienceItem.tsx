import { Marker } from "./Marker"

export interface WorkExperience {
  _id: string,
  title: string,
  company: string,
  description: string,
  startDate: string,
  endDate: string,
}

interface WorkExperienceItemProps {
  align: "left" | "right",
  delay: number,
  isVisible: boolean,
  workExperience: WorkExperience,
}



const CONTAINER_STYLES = {
  left: "lg:ml-0 lg:pr-12",
  right: "lg:ml-auto lg:pl-12"
}

const CONTENT_STYLES = {
  left: "ml-4 lg:ml-auto",
  right: "ml-4 lg:ml-0 lg:mr-auto"
}

function formatDate(date: string) {
  const dateObj = new Date(date)
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
  const year = dateObj.getUTCFullYear();

  return `${month}/${year}`;
}

export function WorkExperienceItem({ workExperience, align, delay, isVisible }: WorkExperienceItemProps) {
  const endDate = workExperience.endDate ? formatDate(workExperience.endDate) : 'Atual'
  const startDate = formatDate(workExperience.startDate)
  const formattedDate = `(${startDate} - ${endDate})`
  return (
    <div className={`ml-6 lg:w-1/2 relative ${CONTAINER_STYLES[align]} ${isVisible ? "animate-fade-in" : ""}`} style={{ animationDelay: delay + "ms" }} >
      <Marker align={align}>
        {new Date(workExperience.startDate).getFullYear() + ""}
      </Marker>
      <div className={`max-w-prose lg:max-w-md ${CONTENT_STYLES[align]}`} >
        <h4 className="font-semibold text-2xl">{workExperience.title}</h4>
        <h5 className="font-medium text-lg text-phantom-600 mb-2 inline-block">{workExperience.company}</h5> <span className="text-phantom-600">{formattedDate}</span>

        <div className="whitespace-pre-line">{workExperience.description}</div>
      </div>
    </div>
  )
}
