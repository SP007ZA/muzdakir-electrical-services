import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import BannerForm from '../Compontents/BannerForm'
import ServiceCard from '../Compontents/ServicesCard'
import About from '../Compontents/About'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Divider from '../Compontents/Divider'
import ContactForm from '../Compontents/ContactForm'
import GetInRTouch from '../Compontents/GetInTouch'
import Footer from '../Compontents/Footer'



const Home: NextPage = () => {
  return (
    <Flex direction='column' >
    <BannerForm/>
    <Divider/>
    <About/>
    <ServiceCard />
    <GetInRTouch/>
    <Footer/>
    <FloatingWhatsApp phoneNumber='+27681602785' accountName='TES ELECTRICAL'  avatar='/images/electricity-logo.PNG'/>
    </Flex>
  )
}

export default Home
