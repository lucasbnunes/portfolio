import ResponsiveItem from "./ResponsiveItem";

export default function ProjectsGallery() {
  const projects = [
    {
      image: 'https://picsum.photos/800/450',
      title: "Lorem Ipsum",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt felis vitae gravida placerat. Quisque tincidunt consectetur blandit. ',
      tags: ['React', 'React Native', 'Pocketbase', 'Figma', 'Typescript', 'ChakraUI', 'Expo', 'React Native', 'Pocketbase', 'Figma', 'Typescript', 'ChakraUI', 'Expo'],
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
