import React, {useState} from "react"
import { Button, Flex } from "@chakra-ui/react"
import LineHeading from "@/components/LineHeading"
import { useRouter } from "next/router";
import { NextSeo } from "next-seo"

function FormSuccess(): React.ReactElement {
  const router = useRouter();
  
  return (
    <>
      <NextSeo title="Form Submitted!" />
      <Flex direction="column" alignItems="center" width="full" minH="100vh" mx="auto" maxW="6xl">
        <LineHeading
          mt="28"
          fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
          textAlign="center"
        >
          Form Submitted!
        </LineHeading>
        
        <Button colorScheme="brand" size="lg" type="submit" name="submit" mt={5} onClick={() => router.push("/contact")}>
          Return
        </Button>

      </Flex>
    </>
  )
}

export default FormSuccess
