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
            
            <form action="https://formspree.io/f/xzbykvze" method="POST">

              <ContactCard id="Name" header="Name" placeholder="Enter your name" type="text" name="name"> 
              </ContactCard>
              
              <ContactCard id="Email" header="Email" placeholder="Enter your email" type="email" name="_replyto"> 
              </ContactCard>
              
              <ContactMessageCard id="Message" header="Message" placeholder="Enter your message" type="textarea" name="message"> 
              </ContactMessageCard>

              <Button colorScheme="brand" size="lg" type="submit" name="submit" mt={5}>
                Submit
              </Button>

            </form>
            
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Contact
