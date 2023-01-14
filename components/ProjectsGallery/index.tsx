import ResponsiveItem from "./ResponsiveItem";

export default function ProjectsGallery() {
  const projects = [
    {
      image: 'https://mobbin.com/_next/image?url=https%3A%2F%2Fujasntkfphywizsdaapi.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fapp_screens%2Fe570a5fd-9158-42d3-9e84-58b287bd7dd8.png&w=3840&q=85',
      title: "Lorem Ipsum",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt felis vitae gravida placerat. Quisque tincidunt consectetur blandit. ',
      tags: ['React', 'React Native', 'Pocketbase', 'Figma', 'Typescript', 'ChakraUI', 'Expo', 'CSS', 'HTML', 'JavaScript'],
      repo: 'https://github.com/',
      url: 'https://github.com/',
      id: '1',
    },
    {
      image: 'https://picsum.photos/800/450',
      title: "Lorem Ipsum",
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, iure. Quas, dignissimos.',
      tags: ['React', 'React Native', 'Pocketbase', 'Figma', 'Typescript', 'ChakraUI', 'Expo'],
      repo: 'https://github.com/',
      url: 'https://github.com/',
      id: '2',
    },
    {
      image: 'https://picsum.photos/800/450',
      title: "Lorem Ipsum",
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, iure. Quas, dignissimos.',
      tags: ['React', 'React Native', 'Pocketbase', 'Figma', 'Typescript', 'ChakraUI', 'Expo'],
      repo: 'https://github.com/',
      url: 'https://github.com/',
      id: '3',
    }
  ]

  return (
    <ul className='max-w-screen-xl mt-24'>
      {projects.map((project) => <ResponsiveItem key={project.id} {...project} />)}
    </ul>
  )
}
