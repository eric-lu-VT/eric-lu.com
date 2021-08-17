import React from "react";
import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  SimpleGrid,
  AspectRatio,
  useColorMode,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Tag,
  Stack,
} from "@chakra-ui/react";
import { usePalette } from "react-palette";

interface FormType {
  children: [];
  id: string;
  header: string;
  placeholder: string;
  type?: string;
  name?: string;
}

export const ContactCard = ({children, id, header, placeholder, type, name }: FormType): JSX.Element => {
  const { data } = usePalette(`./static/images/toolImages/${id}.png`);
  const { colorMode } = useColorMode();

  return (
    <Box as="a" height="100%">
      <SimpleGrid
        bg={useColorModeValue(`white`, `gray.900`)}
        p={3}
        mt={5}
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
        <Flex
          // minWidth = "676"
          justifyContent="space-between"
          flexDirection={["column", "row", "row"]}
        >
          <Flex
            flexDirection="column"
          >
            <FormControl>
              <FormLabel>{header}</FormLabel>
              <Input type={type} color={useColorModeValue(`gray.600`, `gray.400`)} placeholder={placeholder} minWidth = {{sm: "300px", md: "680px", lg: "676px", xl: "1200px"}} name={name}/>
            </FormControl>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default ContactCard;
