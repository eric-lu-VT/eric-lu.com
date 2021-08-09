import React from "react"
import { SimpleGrid } from "@chakra-ui/react"
import ProjectCard from "../ProjectCard"
import projects, {categories, LanguageType} from "../../data/projects"

const ProjectGrid = ({ filter }: { filter: categories }): JSX.Element => {
  return (
    <SimpleGrid pt={10} columns={{ base: 1, md: 2 }} spacingX={10} spacingY={5}>
      {projects
        .filter(x => x.category.includes(filter))
        .sort((a, b) => {
          if (a.name < b.name) {
            return -1
          }
          if (a.name > b.name) {
            return 1
          }
          return 0
        })
        .map((project: LanguageType, index: number) => (
          <ProjectCard {...project} key={index.toString()} />
        ))}
    </SimpleGrid>
  )
}

export default ProjectGrid
