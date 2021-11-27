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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { usePalette } from "react-palette";
import { InterestType } from "@/data/skillsInterests";

export const SkillsInterestsCard = ({ id, type, label_1, labelColor_1, label_2, labelColor_2, label_3, labelColor_3, label_4, labelColor_4, label_5, labelColor_5 }: InterestType): JSX.Element => {
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
            <Wrap>
              <WrapItem>
                <Text fontSize="xl" fontWeight="semibold">
                  {type}
                </Text>
              </WrapItem>
              <WrapItem>
                <Tag
                  colorScheme = {labelColor_1}
                  size="md"
                  height="20px"
                  ml={2}
                >
                  {label_1}
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag
                  colorScheme = {labelColor_2}
                  size="md"
                  height="20px"
                  ml={2}
                >
                  {label_2}
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag
                  colorScheme = {labelColor_3}
                  size="md"
                  height="20px"
                  ml={2}
                >
                  {label_3}
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag
                  colorScheme = {labelColor_4}
                  size="md"
                  height="20px"
                  ml={2}
                >
                  {label_4}
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag
                  colorScheme = {labelColor_5}
                  size="md"
                  height="20px"
                  ml={2}
                >
                  {label_5}
                </Tag>
              </WrapItem>
            </Wrap>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default SkillsInterestsCard;
