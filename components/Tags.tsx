interface TagsProps {
  items: string[];
}

export default function Tags({ items }: TagsProps) {
  return (
    <ul className={`w-full flex items-center gap-4  whitespace-nowrap overflow-auto scrollbar-thin scrollbar-thumb-phantom-100 scrollbar-track-phantom-50 py-4 scrollbar-thumb-rounded-sm scrollbar-rounded-sm}`} >
      {items.map((item) => (
        <li key={item} className='bg-phantom-50 px-2.5 py-1.5 text-sm rounded-sm'>{item}</li>
      ))}
    </ul>
  )
}
