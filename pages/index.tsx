import { AboutData, AboutSection } from "@/components/AboutSection";
import { Project } from "@/components/ProjectsGallery/Project";
import { ProjectsSection } from "@/components/ProjectsSection";
import { useContactBarContext } from "contexts/ContactBarContext";
import client from "lib/sanity";
import { GetStaticProps } from "next";
import React from "react";

interface HomeProps {
  about: AboutData,
  projects: Project[]
}

export default function Home({ about, projects }: HomeProps) {
  const { setSocialMediaLinks } = useContactBarContext()

  React.useEffect(() => {
    setSocialMediaLinks(about.social)
  }, [about, setSocialMediaLinks])

  return (
    <>
      <AboutSection data={about} />
      <ProjectsSection projects={projects} />
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const aboutMeQuery = "*[_type == 'aboutMe'][0]"
  const projectsQuery = "*[_type == 'project']{..., 'image': image.asset->url}"
  const { about, projects }: HomeProps = await client.fetch(`{'about': ${aboutMeQuery},'projects': ${projectsQuery}}`)

  return {
    props: {
      about,
      projects
    }
  }
}
