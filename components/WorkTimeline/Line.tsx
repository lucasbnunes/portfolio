interface LineProps {
  isVisible: boolean;
}

export function Line({ isVisible }: LineProps) {
  return <div className={`animate-expandVertically absolute lg:left-1/2 lg:-translate-x-1/2 top-0 inline-block w-1 h-full bg-phantom-900 rounded-sm ${isVisible ? "animate-stretch-vertical" : ""}`} />
}