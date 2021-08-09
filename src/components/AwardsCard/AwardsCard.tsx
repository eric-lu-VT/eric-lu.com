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
import { AwardType } from "@/data/awards";

export const AwardsCard = ({id, title, subject, years }: AwardType): JSX.Element => {
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
            {title}
            </Heading>
            <Text color={useColorModeValue(`gray.600`, `gray.400`)} fontStyle="italic">{subject}</Text>
          </Flex>
          <Flex
            flexDirection="column"
          >
            <Text color={useColorModeValue("black", "white")} fontStyle="italic" fontSize="14px" textAlign="right">
            {years}
            </Text>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default AwardsCard;
