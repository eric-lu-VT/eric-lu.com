import React from "react";
import {
  Box,
  Image,
  Text,
  useColorModeValue,
  Flex,
  SimpleGrid,
  AspectRatio,
  useColorMode,
  Heading,
  Tag,
  Stack,
} from "@chakra-ui/react";
import { usePalette } from "react-palette";
import { EducationType } from "@/data/education";

export const EducationCard = ({id, picURL, schoolURL, school, years, major, gpa, location }: EducationType): JSX.Element => {
  const { data } = usePalette(`./static/images/toolImages/${id}.png`);
  const { colorMode } = useColorMode();

  return (
    <Box as="a" href={schoolURL} height="100%">
      <SimpleGrid
        bg={useColorModeValue(`white`, `gray.900`)}
        p={3}
        height="100%"
        gridTemplateColumns="85px 1fr"
        border="1px solid"
        borderColor={useColorModeValue(`gray.200`, `gray.700`)}
        borderRadius="2xl"
        boxShadow="lg"
        transition="all 0.25s"
        transitionTimingFunction="spring(1 100 10 10)"
        _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
      >
        <AspectRatio ratio={1} boxSize="75px">
          <Box
            position="relative"
            maxHeight="100%"
            maxWidth="100%"
            overflow="hidden"
            boxShadow={`inset 0 0 20px 5px ${useColorModeValue(
              `${data.darkVibrant}19`,
              `${data.lightVibrant}19`
            )}`}
            borderRadius="2xl"
          >
            <Box
              bg={useColorModeValue(data.darkVibrant, data.lightVibrant)}
              position="absolute"
              borderColor={useColorModeValue(`${data.darkVibrant}`, `${data.lightVibrant}`)}
              top={0}
              bottom={0}
              left={0}
              right={0}
              opacity={useColorModeValue(0.15, 0.25)}
            />
            <Image
              alt={`${school} logo`}
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              position="absolute"
              src={
                id === `biorender`
                  ? colorMode === "light"
                    ? picURL
                    : picURL
                  : picURL
              }
              maxHeight="80%"
              maxWidth="80%"
            />
          </Box>
        </AspectRatio>

        <Flex
          justifyContent="space-between"
          flexDirection={["column", "row", "row"]}
        >
          <Flex
            flexDirection="column"
          >
            <Heading
              as="h4"
              size="md"
              fontWeight="bold"
            >
            {school}
            </Heading>
            <Text color={useColorModeValue(`gray.600`, `gray.400`)}>{location}</Text>
            <Text color={useColorModeValue(`gray.600`, `gray.400`)} fontStyle="italic">{major}</Text>
          </Flex>
          <Flex
            flexDirection="column"
          >
            <Text color={useColorModeValue("black", "white")} fontStyle="italic" fontSize="14px" textAlign="right">
            {years}
            </Text>
            <Text color={useColorModeValue(`gray.600`, `gray.400`)} fontStyle="italic" fontSize="14px" textAlign="right">
            {gpa}
            </Text>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default EducationCard;
