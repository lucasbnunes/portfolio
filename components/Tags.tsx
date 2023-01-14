import ScrollContainer from "react-indiana-drag-scroll";

interface TagsProps {
  items: string[];
}

export default function Tags({ items }: TagsProps) {
  return (
    <ScrollContainer
      component="ul"
      hideScrollbars={false}
      className={`w-full py-2 flex items-center gap-4 whitespace-nowrap overflow-auto scrollbar-thin scrollbar-thumb-phantom-100 scrollbar-track-phantom-50 scrollbar-thumb-rounded-sm scrollbar-rounded-sm cursor-grab`} draggingClassName="cursor-grabbing"
    >
      {items.map((item) => (
        <li key={item} className='bg-phantom-50 px-2.5 py-1.5 text-sm rounded-sm'>{item}</li>
      ))}
    </ScrollContainer>
  )
}
