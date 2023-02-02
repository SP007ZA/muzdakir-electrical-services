import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel, faScrewdriverWrench, faBolt, faGears, faWater, faCircleCheck, faCamera} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, CardHeader } from '@chakra-ui/card'

const text = [
  'Affordable & highly professional service.',
  'Our service is accessible to any place within South Africa.',
  'We use modern & innovative methods, techniques and equipment to accomplish our services.',
  'We are highly disciplined in executing our activities in compliance to the safety and other regulations in the industry.'
]

const ServiceCard = () => {
  return (
   
    <Box
    id="services"
   
    padding={8}>
      <Box
       fontWeight='semibold'
       padding={15}
       fontSize={36}
       as='h1'
      
      >Our Services</Box>
      <SimpleGrid minChildWidth='320px' spacing='40px'>
  <Card minHeight='350px'>
 <Box display='flex' flexDirection='column' alignItems='center' marginTop={4}> 
 <FontAwesomeIcon style={{width: '84px'}}  icon={faSolarPanel} />
 </Box>
 <CardHeader alignSelf='center' padding={2}>
 <Heading as='h4'   size='md'  color="blue.700" >
    SOLAR DESIGN & INSTALLATION
  </Heading>
 </CardHeader>
 <CardBody padding={4}>
  <Text color='gray.500'>
  We are involved with a variety of Solar Projects, ranging from: Domestic to Industrial Installations, Commercial Buildings and Electrical Contracting. We are an authorised company and registered with all relevant Authorities. We also issue compliance certificates to new and old Solar installations.
  </Text>
 </CardBody>
  </Card>

  <Card minHeight='350px'>
 <Box display='flex' flexDirection='column' alignItems='center' marginTop={4}> 
 <FontAwesomeIcon  style={{width: '64px'}} icon={faScrewdriverWrench} />
 </Box>
 <CardHeader alignSelf='center' padding={2}>
 <Heading as='h4'   size='md'  color="blue.700" >
 MAINTENANCE AND REPAIRS
  </Heading>
 </CardHeader>
 <CardBody padding={4}>
  <Text color='gray.500'>
  We do maintenance and repairs to electrical equipment like Solar Panels, Invertors, Batteries, Stoves, Ovens, Grillers, Flat-tops, Extractor fans and Deep fryers. We also do maintenance and repairs to Gate motors, Electric Fencing.
  </Text>
 </CardBody>
  </Card>

  <Card minHeight='350px'>
 <Box display='flex' flexDirection='column' alignItems='center' marginTop={4}> 
 <FontAwesomeIcon  style={{width: '64px'}} icon={faBolt} />
 </Box>
 <CardHeader alignSelf='center' padding={2}>
 <Heading as='h4'   size='md'  color="blue.700" >
 ELECTRICAL CONSTRUCTION WORK
  </Heading>
 </CardHeader>
 <CardBody padding={4}>
  <Text color='gray.500'>
  We are involved with a variety of electrical work, ranging from: Domestic to Industrial Installations, Commercial Buildings and Electrical Contracting. We are an authorised company and registered with all relevant Authorities. We also issue compliance certificates to new and old electrical installations.
  </Text>
 </CardBody>
  </Card>
  <Card minHeight='350px'>
 <Box display='flex' flexDirection='column' alignItems='center' marginTop={4}> 
 <FontAwesomeIcon  style={{width: '64px'}} icon={faGears} />
 </Box>
 <CardHeader alignSelf='center' padding={2}>
 <Heading as='h4'   size='md'  color="blue.700" >
 GATE & GARAGE MOTORS
  </Heading>
 </CardHeader>
 <CardBody padding={4}>
  <Text color='gray.500'>
  We do new installations, fault finding and repairs of Gate and Garage motors. We have vast experience working with different types of gate and garage motors like; Centurion Swing & Sliding motors, Hansa Swing & Sliding motors, Gemini Sliding motors, ET motors and Digi-Door motors.
  </Text>
 </CardBody>
  </Card>


  <Card minHeight='350px'>
 <Box display='flex' flexDirection='column' alignItems='center' marginTop={4}> 
 <FontAwesomeIcon  style={{width: '64px'}} icon={faCamera} />
 </Box>
 <CardHeader alignSelf='center' padding={2}>
 <Heading as='h4'   size='md'  color="blue.700" >
 CCTV INSTALLATIONS
  </Heading>
 </CardHeader>
 <CardBody padding={4}>
  <Text color='gray.500'>
  We do new installations, fault finding and repairs of Gate and Garage motors. We have vast experience working with different types of gate and garage motors like; Centurion Swing & Sliding motors, Hansa Swing & Sliding motors, Gemini Sliding motors, ET motors and Digi-Door motors.
  </Text>
 </CardBody>
  </Card>
  <Card minHeight='350px'>
 <Box display='flex' flexDirection='column' alignItems='center' marginTop={4}> 
 <FontAwesomeIcon  style={{width: '64px'}} icon={faWater} />
 </Box>
 <CardHeader alignSelf='center' padding={2}>
 <Heading as='h4'   size='md'  color="blue.700" >
 ELECTRIC FENCING
  </Heading>
 </CardHeader>
 <CardBody padding={4}>
  <Text color='gray.500'>
  Muzdakir Electrical Services supplys and installs top quality fencing products and services. We do repairs & maintenance of fencing, intercoms, alarms and motorised gate systems.
  </Text>
 </CardBody>
  </Card>
</SimpleGrid>
<Card marginTop={5} minWidth="320px">
  <CardHeader>
    <Heading>
    We provide more efficient and effective services:
    </Heading>
  </CardHeader>
  <CardBody>
    {
      text.map((item, i) => (
        <Box display='flex' key={i}>
    <FontAwesomeIcon  style={{width: '28px'}} color='#2C5282'  icon={faCircleCheck} />
    <Text padding={2}>
    {item}
    </Text>
    </Box>
      ))
    }
   
  </CardBody>
</Card>
    
    </Box>
  )
}

export default ServiceCard