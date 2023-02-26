interface DotProps {
  align: "left" | "right"
}

const ALIGNMENT_MAP = {
  left: "-left-8 lg:left-auto lg:-right-2.5",
  right: "-left-8 lg:-left-2.5"
}

export function Dot({ align }: DotProps) {
  return <div className={`absolute top-1.5 w-5 h-5 bg-phantom-900 rounded-full border-4 border-white ${ALIGNMENT_MAP[align]}`} />
}