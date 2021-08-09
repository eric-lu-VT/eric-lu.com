import {
  Box,
  chakra,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  Skeleton,
  useBreakpoint,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { NextSeo } from "next-seo";

export default function Home(): React.ReactElement {
  const [imageLoad, setImageLoad] = useState(false);
  const bp = useBreakpoint();
  return (
    <>
      <NextSeo title="Home" />

      <Box
        minH="100vh"
        height="full"
        width={{ base: "95%", md: "70%" }}
        maxW="7xl"
        mx="auto"
        pt={{ base: "28", sm: "14", md: "16", xl: "20" }}
      >
        {/* Im not actually too sure why this needs to be here, but without this additional flex
        the body doesn"t begin at the top of the page... */}
        <Flex
          direction="column"
          justifyContent={{ base: "center", md: "flex-start" }}
          height="full"
          width="full"
          p={{ base: 0, sm: 16 }}
        >
          <Flex
            direction={{ base: `column`, lg: `row` }}
            alignItems="center"
            mx="auto"
            my={{ xl: "16" }}
          >
            <Skeleton isLoaded={imageLoad} boxSize="250px" borderRadius="2xl" m="auto">
              <Image
                borderRadius="2xl"
                boxSize="250px"
                src="https://i.imgur.com/YJeBRC0.jpg"
                objectFit="cover"
                alt="Eric Lu"
                onLoad={() => setImageLoad(true)}
              />
            </Skeleton>
            <Flex
              alignSelf="center"
              direction="column"
              pl={{ base: 0, lg: 10 }}
              my={{ base: 10, lg: 0 }}
            >
              <Heading
                bgGradient={`linear(to-r, ${useColorModeValue(
                  `brand.600`,
                  `brand.400`
                )}, ${useColorModeValue(`teal.600`, `teal.400`)}, ${useColorModeValue(
                  `blue.600`,
                  `blue.300`
                )})`}
                className="moving-grad"
                bgClip="text"
                fontSize={{ base: `5xl`, lg: `7xl` }}
                textAlign={{ base: `center`, lg: `left` }}
              >
                Hi, I&apos;m Eric!
              </Heading>
              <chakra.p
                maxW="650px"
                textAlign={{ base: `center`, lg: `left` }}
                fontSize="xl"
                mt={2}
              >
                I'm a student at Dartmouth College, majoring in CS. 
                Here on my website, you can {" "}
                <Link href="/about" passHref>
                  <ChakraLink>see my experiences</ChakraLink>
                </Link>, look through the{" "}
                <Link href="/projects" passHref>
                  <ChakraLink>projects</ChakraLink>
                </Link>{" "}
                I've worked on, and/or reach out to me through my{" "}
                <Link href="/contact" passHref>
                  <ChakraLink>contact</ChakraLink>
                </Link>{" "}
                form.{" "}
              </chakra.p>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
