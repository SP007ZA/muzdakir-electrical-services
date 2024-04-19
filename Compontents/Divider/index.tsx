import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Divider() {
  return (
    <Flex mt={[-75, -75, 0 ,0]} w="100%" bgColor="blue.700" flexDirection="column"  alignItems="center" justifyContent="center"  >

    <Text fontSize={["sm","lg", 'xl']} fontWeight="bold" p={4} color="white">
      Driven and Independant electricians with over 15 years experience providing high quality
      installation and repairs.
  </Text>
  
  </Flex>
  )
}

export default Divider