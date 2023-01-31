import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ContactForm from '../ContactForm'
import ImageSlider from '../ImageSlider'

const BannerForm = () => {


  return (
    <Flex  flexDirection="column" height={["1200px", "1200px", "700px"]} >
        <Flex w="100%" flexDirection={["column", "column","row"]} h="80%"  justifyContent="space-between" mt={1}>
    
                    <ImageSlider  />   
    </Flex>
   
    </Flex>
  )
}

export default BannerForm