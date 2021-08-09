import React from "react";
import { Box, 
         Stack, 
         Tag, 
         Text, 
         useColorModeValue, 
         VStack, 
         AspectRatio, 
         Flex, 
         Badge, 
         Heading, 
        } from "@chakra-ui/react";
import { repoType } from "@/pages/api/github";

interface RepoCardProps {
  title: string;
  years: string;
}

export const RepoCard = ({ title, years}: RepoCardProps): JSX.Element => {
  return (
        <Flex
          align="center"
          border="1px solid"
          // borderColor={borderColor[colorMode]}
          borderRadius={4}
          p={4}
          width="100%"
        >
          <Stack>
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
                  {title}
                </Heading>
              </Flex>
              <Flex
                flexDirection="column"
              >
                <Text fontStyle="italic" color="gray.600" fontSize="14px" textAlign = "right"> 
                ‎‎{years}
                </Text>
              </Flex>
            </Flex>
          </Stack>
        </Flex>
  );
};

export default RepoCard;
