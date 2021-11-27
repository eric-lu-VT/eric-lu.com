import React from "react";
import {
  Badge,
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

interface ExperienceType {
  id: string;
  name: string;
  years: string;
  pos: string;
  badge_1: string;
  badge_2?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  pos2?: string;
  description4?: string;
}

export const ExperienceCard = ({ id, name, years, pos, badge_1, badge_2, description1, description2, description3, pos2, description4}: ExperienceType): JSX.Element => {
  const { data } = usePalette(`./static/images/toolImages/${id}.png`);
  const { colorMode } = useColorMode();

  return (
    <Box as="a" height="100%">
      <SimpleGrid
        bg={useColorModeValue(`white`, `gray.900`)}
        p={3}
        height="100%"
        gridTemplateColumns="1fr"
        border="1px solid"
        borderColor={useColorModeValue(`gray.200`, `gray.700`)}
        borderRadius="2xl"
        boxShadow="lg"
        transition="all 0.25s"
        transitionTimingFunction="spring(1 100 10 10)"
        _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
      >
        <AspectRatio ratio={1} boxSize="0px">
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
            
          </Box>
        </AspectRatio>

        <Flex
          minWidth = {{md: "676px", lg: "676px"}}
          width="full"
          maxW="full"
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
            {name}
            </Heading>
            <Text color={useColorModeValue("black", "white")} fontStyle="italic">{pos}</Text>
          </Flex>
          <Flex
            flexDirection="column"
          >
            <Text color={useColorModeValue("black", "white")} fontStyle="italic" fontSize="14px" textAlign="right">
            {years}
            </Text>
            <Flex justifyContent={["flex-start", "flex-end", "flex-end"]}>
              <Badge m={1}>{badge_1}</Badge>
              <Badge m={1} display={badge_2 == null ? "none" : "flex"}>{badge_2}</Badge>
            </Flex>
          </Flex>
        </Flex>
        <Text color={useColorModeValue(`gray.600`, `gray.400`)} whiteSpace="normal" width="full">
          {description1}
        </Text>
        <Text color={useColorModeValue(`gray.600`, `gray.400`)} whiteSpace="normal" width="full">
          {description2}
        </Text>
        <Text color={useColorModeValue(`gray.600`, `gray.400`)} whiteSpace="normal" width="full">
          {description3}
        </Text>
        <Flex
          justifyContent="space-between"
          flexDirection={["column", "row", "row"]}
        >
          <Flex
            flexDirection="column"
          >
            <Text color={useColorModeValue("black", "white")} fontStyle="italic">{pos2}</Text>
          </Flex>
        </Flex>
        <Text color={useColorModeValue(`gray.600`, `gray.400`)} whiteSpace="normal" width="100%">
          {description4}
        </Text>
      </SimpleGrid>
    </Box>
  );
};

export default ExperienceCard;
