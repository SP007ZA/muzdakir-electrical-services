import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
   <Box
    display='flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    backgroundColor='white'
    id="about"
    padding={5}
   >
     <Box display='flex' borderBottom='1px' borderColor='red' padding={5}>
     <Heading as='h1' size={['sm', 'md','xl']}  mr={2}  color='gray.600' >
    About <Box as='span' color="blue.700">Muzdakir Electrical Services</Box>
  </Heading>
     </Box>
     <Text fontSize={['md','md','xl']} color='gray.500' padding={2}>
     Muzdakir Electrical Services is involved in a variety of electrical and security work ranging from domestic to industrial installations, gate motor installations, electric fence installations, intercom installations and CCTV installations. We pride ourselves in quality workmanship and service excellence. Manuka Electrical Solutions is an authorised company and registered with all relevant authorities situated in Ekurhuleni. Our knowledge of the electrical and security industry allows us to be hands on in every aspect of the job from the beginning to the end.
    </Text>
    <Box
      display='flex'
      flexDirection={['column','column','row','row']}
      justifyContent='space-between'
    > 
     <Image src='/images/tester.jpg' objectFit='fill' width='1000%' height='500%'/>
    
      <Box
         display='flex'
         flexDirection="column"
         marginTop={2}
      >
        <Box display='flex' justifyContent='center' >
     <Heading as='h5'  borderBottom='1px' borderColor='red' paddingBottom={3}  size={['sm', 'md','lg']}  mr={2}  color='gray.600' >
    Our <Box as='span' color="blue.700">Vision</Box>
  </Heading>
     </Box>
     <Text fontSize={['md','md','lg']} color='gray.500' padding={2}>
     Muzdakir Electrical Services wishes to play a significant role in the infrastructure development of Gauteng Province and of South Africa as a whole by creating partnership with other emerging contractors
    </Text>
        <Box display='flex' justifyContent='center' >
     <Heading as='h5'  borderBottom='1px' borderColor='red' paddingBottom={3}  size={['sm', 'md','lg']}  mr={2}  color='gray.600' >
    Our <Box as='span' color="blue.700">Mission</Box>
  </Heading>
     </Box>
     <Text fontSize={['md','md','lg']} color='gray.500' padding={2}>
     We value our work ethics in highest nature, to be productive and proactive in our projects, to be accountable of all work undertaken by Muzdakir Electrical Services. We pride ourselves in quality that speaks for itself without compromising safety and reliability.
    </Text>


      </Box>

    </Box>
   </Box>
  )
}

export default About