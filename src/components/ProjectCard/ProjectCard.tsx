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
  Tag,
  Stack,
} from "@chakra-ui/react";
import { usePalette } from "react-palette";
import { LanguageType } from "@/data/projects";

export const ProjectCard = ({ name, description, link, id, labels, labelColor }: LanguageType): JSX.Element => {
  const { data } = usePalette(`./static/images/toolImages/${id}.png`);
  const { colorMode } = useColorMode();

  return (
    <Box as="a" href={link} height="100%">
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
          textAlign="left"
          direction="column"
          height="100%"
          justifyContent="center"
          alignItems="flex-start"
          isTruncated
        >
          <Stack isInline alignItems="center">
            <Text fontSize="xl" fontWeight="semibold">
              {name}
            </Text>
            {labels?.map((label, index) => (
              <Tag
                colorScheme = {labelColor}
                size="md"
                height="20px"
                key={index.toString() + id}
                ml={2}
              >
                {label}
              </Tag>
            ))}
          </Stack>

          <Text color={useColorModeValue(`gray.600`, `gray.400`)} whiteSpace="normal" width="100%">
            {description}
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default ProjectCard;
