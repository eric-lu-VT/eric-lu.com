import React, {useState} from "react"
import { Box, Button, Flex, FormControl, FormLabel, Input, SimpleGrid, Textarea, useColorModeValue } from "@chakra-ui/react"
import LineHeading from "@/components/LineHeading"
import ContactCard from "@/components/ContactCard"
import ContactMessageCard from "@/components/ContactMessageCard"
import { NextSeo } from "next-seo"

function Contact(): React.ReactElement {

  return (
    <>
      <NextSeo title="Contact" />
      <Flex direction="column" alignItems="center" width="full" minH="100vh" mx="auto" maxW="6xl">
        <LineHeading
          mt="28"
          fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
          textAlign="center"
        >
          Contact Me
        </LineHeading>
        
        <Box>
          <Box my={8} textAlign="center">
            
            <form className = "gform" method="POST" data-email="example@email.net" action="https://script.google.com/macros/s/AKfycbyN7lfZ7bpukNalu2LXCcXW63ujlvCY5BeZ3yo/exec">
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
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input type="text" id="name" name="name" color={useColorModeValue(`gray.600`, `gray.400`)} placeholder="Enter your name" minWidth = {{sm: "300px", md: "680px", lg: "676px", xl: "1200px"}} />
                      </FormControl>
                    </Flex>
                  </Flex>
                </SimpleGrid>
              </Box>

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
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input type="email" id="email" name="email" color={useColorModeValue(`gray.600`, `gray.400`)} placeholder="Enter your email" minWidth = {{sm: "300px", md: "680px", lg: "676px", xl: "1200px"}} />
                      </FormControl>
                    </Flex>
                  </Flex>
                </SimpleGrid>
              </Box>

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
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Textarea type="text" id="message" name="message" color={useColorModeValue(`gray.600`, `gray.400`)} placeholder="Enter your message" minWidth = {{sm: "300px", md: "680px", lg: "676px", xl: "1200px"}} />
                      </FormControl>
                    </Flex>
                  </Flex>
                </SimpleGrid>
              </Box>
            
              <Button colorScheme="brand" size="lg" type="submit" name="submit" mt={5} >
                Submit
              </Button>
            </form>

            {/*
            <form>

              <ContactCard id="Name" header="Name" placeholder="Enter your name" type="text"> 
              </ContactCard>
              
              <ContactCard id="Email" header="Email" placeholder="Enter your email" type="email" > 
              </ContactCard>
              
              <ContactMessageCard id="Message" header="Message" placeholder="Enter your message" type="textarea"> 
              </ContactMessageCard>

              <Button colorScheme="brand" size="lg" type="submit" name="submit" mt={5}>
                Submit
              </Button>

            </form>
            */}
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Contact
