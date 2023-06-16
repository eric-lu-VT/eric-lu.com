import React from "react"
import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import LineHeading from "@/components/LineHeading"
import EducationCard from "@/components/EducationCard"
import AwardsCard from "@/components/AwardsCard"
import ExperienceCard from "@/components/ExperienceCard"
import LeadershipActivityCard from "@/components/LeadershipActivityCard"
import SkillsInterestsCard from "@/components/SkillsInterestsCard"
import education, { EducationType } from "../src/data/education"
import awards, { AwardType } from "../src/data/awards"
import workExperiences, { WorkExperienceType } from "../src/data/workExperience"
// import additionalExperiences, { AdditionalExperienceType } from "../src/data/additionalExperience"
import LeadershipActivities, { LeadershipActivityType } from "../src/data/leadershipActivities"
import Interests, { InterestType } from "../src/data/skillsInterests"

function About(): React.ReactElement {
  return (
    <>
      <NextSeo title="About Me" />
      <Box width='full' px={3} minH='100vh' height='full' mx='auto' maxW='6xl' py='28'>
        <Flex direction="column" align="center" alignItems="center" width="full" minH="100vh" mx="auto" maxW="6xl">
          <LineHeading
            fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
            textAlign="center"
          >
            About Me
          </LineHeading>
          
          <Button
              as="a"
              href="https://drive.google.com/file/d/1Hg2vgTKFP8ntW5oKDXoxaDgBb3ZP6odw/view?usp=sharing"
              colorScheme="brand"
              size="lg"
              mt={5}
            >
              View My Resume (PDF)
          </Button>

          <Heading letterSpacing="tight" mt={[2, 4, 6, 8]} mb={5} size="lg" fontWeight={700} as="h2">
            Education
          </Heading>
          <Flex direction="column" justifyContent = "flex-start" alignItems = "flex-start" maxWidth = {{sm: "320px", md: "768px", lg: "960px", xl: "1200px"}}>
            <SimpleGrid columns={1} spacingY={5} minChildWidth={{sm: "100%", md: "100%", lg: "100%", xl: "100%"}} maxHeight = {{sm: "260px", md: "220px", lg: "700px", xl: "800px"}}>
              {education.map((school: EducationType, index: number) => (
                <EducationCard {...school} key={index.toString()} />
              ))}
            </SimpleGrid>
          </Flex>

          <Heading letterSpacing="tight" mt={[2, 4, 6, 8]} mb={5} size="lg" fontWeight={700} as="h2">
            Honors/Awards
          </Heading>
          <Flex direction="column" justifyContent = "flex-start" alignItems = "center" maxWidth = {{sm: "320px", md: "768px", lg: "960px", xl: "1200px"}}>
            <SimpleGrid columns={1} spacingY={5} minChildWidth={{sm: "100%", md: "100%", lg: "100%", xl: "100%"}} maxHeight = {{sm: "720px", md: "800px", lg: "800px", xl: "800px"}}>
              {awards.map((award: AwardType, index: number) => (
                <AwardsCard {...award} key={index.toString()} />
              ))}
            </SimpleGrid>
          </Flex>

          <Heading letterSpacing="tight" mt={[2, 4, 6, 8]} mb={5} size="lg" fontWeight={700} as="h2">
            Relevant Experience
          </Heading>
          <Flex direction="column" justifyContent = "flex-start" alignItems = "center" maxWidth = {{sm: "320px", md: "768px", lg: "700px", xl: "1200px"}} mb="15">
            <SimpleGrid spacingY={8} minChildWidth={{sm: "100%", md: "100%", lg: "100%", xl: "100%"}}>
              {workExperiences.map((act: WorkExperienceType, index: number) => (
                <ExperienceCard {...act} key={index.toString()} />
              ))}
            </SimpleGrid>
          </Flex>
          
          <Heading letterSpacing="tight" mt={[2, 4, 6, 8]} mb={5} size="lg" fontWeight={700} as="h2">
            Featured Projects
          </Heading>
          <Flex direction="column" justifyContent = "flex-start" alignItems = "center" maxWidth = {{sm: "320px", md: "768px", lg: "700px", xl: "1200px"}} mb="15">
            <SimpleGrid spacingY={8} minChildWidth={{sm: "100%", md: "100%", lg: "100%", xl: "100%"}}>
              {LeadershipActivities.map((act: LeadershipActivityType, index: number) => (
                <LeadershipActivityCard {...act} key={index.toString()} />
              ))}
            </SimpleGrid>
          </Flex>

          {/* <Heading letterSpacing="tight" mt={[2, 4, 6, 8]} mb={5} size="lg" fontWeight={700} as="h2">
            Additional Experience
          </Heading>
          <Flex direction="column" justifyContent = "flex-start" alignItems = "flex-start" maxWidth = {{sm: "320px", md: "700px", lg: "700px", xl: "1200px"}}>
            <SimpleGrid spacingY={8} minChildWidth={{sm: "100%", md: "100%", lg: "100%", xl: "100%"}}>
              {additionalExperiences.map((act: AdditionalExperienceType, index: number) => (
                <ExperienceCard {...act} key={index.toString()} />
              ))}
            </SimpleGrid>
          </Flex> */}

          <Heading letterSpacing="tight" mt={[2, 4, 6, 8]} mb={5} size="lg" fontWeight={700} as="h2">
            Technical Skills
          </Heading>
          <Flex direction="column" justifyContent = "flex-start" alignItems = "flex-start" maxWidth = {{sm: "320px", md: "768px", lg: "700px", xl: "1200px"}} mb="15">
            <SimpleGrid spacingY={5} minChildWidth={{sm: "233px", md: "560px", lg: "700px", xl: "875px"}} maxHeight = {{sm: "250px", md: "200px", lg: "800px", xl: "800px"}}>
              {Interests.map((skill: InterestType, index: number) => (
                <SkillsInterestsCard {...skill} key={index.toString()} />
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default About
