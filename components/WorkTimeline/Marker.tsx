interface MarkerProps {
  children: string,
  align: "left" | "right"
}

const ALIGNMENT_MAP = {
  left: "-left-[2.4375rem] lg:left-auto lg:-right-[1.08125rem]",
  right: "-left-[2.4375rem] lg:-left-[1.0625rem]"
}

export function Marker({ align, children }: MarkerProps) {
  return <div className={`absolute top-1 text-sm font-medium bg-white py-1 ${ALIGNMENT_MAP[align]}`}>{children}</div>
}