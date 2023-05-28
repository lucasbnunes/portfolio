import { AboutData, AboutSection } from "@/components/AboutSection";
import { Project } from "@/components/ProjectsGallery/Project";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WorkExperienceSection } from "@/components/WorkExperienceSection";
import { WorkExperience } from "@/components/WorkTimeline/WorkExperienceItem";
import { useContactBarContext } from "contexts/ContactBarContext";
import client from "lib/sanity";
import { GetStaticProps } from "next";
import React from "react";

interface HomeProps {
  about: AboutData,
  projects: Project[],
  workExperience: WorkExperience[]
}

export default function Home({ about, projects, workExperience }: HomeProps) {
  const { setSocialMediaLinks } = useContactBarContext()

  React.useEffect(() => {
    setSocialMediaLinks(about.social)
  }, [about, setSocialMediaLinks])

  return (
    <>
      <AboutSection data={about} />

      <WorkExperienceSection experiences={workExperience} />

      <ProjectsSection projects={projects} />
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const TWO_MINUTES = 60 * 2

  const aboutMeQuery = "*[_type == 'aboutMe'][0]";
  const workExperienceQuery = "*[_type == 'experience']";
  const projectsQuery = "*[_type == 'project']{..., 'image': image.asset->url}";
  const props: HomeProps = await client.fetch(`{"about": ${aboutMeQuery}, "workExperience": ${workExperienceQuery}, "projects": ${projectsQuery}}`);

  return {
    props: props,
    revalidate: TWO_MINUTES
  }
}
