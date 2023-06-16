import React from "react"
import {
  Button, 
  Flex,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text, 
  useColorModeValue,
} from "@chakra-ui/react"
import LineHeading from "@/components/LineHeading"
import ProjectGrid from "@/components/ProjectGrid"
import {SiJava, SiJavascript, SiTypescript, SiPython, SiCplusplus} from "react-icons/si"

import { NextSeo } from "next-seo"
import { FaGithub } from "react-icons/fa"

function Projects(): React.ReactElement {
  return (
    <>
      <NextSeo title="Projects" />
      <Flex direction="column" alignItems="center" width="full" minH="100vh" mx="auto" maxW="6xl">
        <LineHeading
          mt="28"
          fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
          textAlign="center"
        >
          My Projects
        </LineHeading>
        <Button
            as="a"
            href="https://github.com/eric-lu-VT"
            colorScheme="brand"
            size="lg"
            mt={5}
            leftIcon={<FaGithub />}
          >
            View My Profile
        </Button>
        <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%" mt="10" mb="24">
          <TabList display="flex" flexWrap="wrap">
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `blue.800`,
                bg: `blue.100`,
              }}
              mr={2}
              mt={2}
              s
            >
              <HStack spacing={1}>
                <Icon as={SiTypescript} />
                <Text>TypeScript</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `yellow.800`,
                bg: `yellow.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={SiJavascript} />
                <Text>JavaScript</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white.100`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `orange.800`,
                bg: `orange.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={SiJava} />
                <Text>Java</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `green.800`,
                bg: `green.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={SiPython} />
                <Text>Python</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `purple.800`,
                bg: `purple.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={SiCplusplus} />
                <Text>C++</Text>
              </HStack>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ProjectGrid filter="TypeScript" />
            </TabPanel>
            <TabPanel>
              <ProjectGrid filter="JavaScript" />
            </TabPanel>
            <TabPanel>
              <ProjectGrid filter="Java" />
            </TabPanel>
            <TabPanel>
              <ProjectGrid filter="Python" />
            </TabPanel>
            <TabPanel>
              <ProjectGrid filter="C++" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  )
}

export default Projects
