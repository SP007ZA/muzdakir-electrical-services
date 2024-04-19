import React, { useState } from 'react';
import { Box, Grid, Image, Button, Flex, Modal, ModalOverlay, ModalContent, ModalBody, Heading } from '@chakra-ui/react';


const ImageGallery = ({ images }: any) => {
  const [currentSet, setCurrentSet] = useState(1);
  const [selectedImage, setSelectedImage] = useState<any>(null);


  const handleSetChange = (newSet:any) => {
    setCurrentSet(newSet);
  };

  const handleImageClick = (image:any) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };



  const renderImages = () => {
    const startIndex = (currentSet - 1) * 5;
    const endIndex = startIndex + 5;
    return images.slice(startIndex, endIndex).map((image:any, index:any) => (
      <ImageBox key={index}>
        <Image 
        src={image.url} 
        alt={image.alt} 
        minWidth="280px" 
        maxHeight="200px" 
        onClick={() => handleImageClick(image)}
          cursor="pointer"
        objectFit="cover" />
      </ImageBox>
    ));
  };

  return (
    <Box display="flex" flexDir="column" padding={8}>
      <Heading mb={5}>Image Gallery</Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
        {renderImages()}
      </Grid>
      <Flex justifyContent="center" mt={4}>
        {[1, 2, 3, 4].map((set) => (
          <Button key={set} variant="ghost" onClick={() => handleSetChange(set)} isActive={currentSet === set}>
            {set}
          </Button>
        ))}
      </Flex>
      <Modal isOpen={selectedImage !== null} onClose={handleCloseModal} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody display="flex" justifyContent="center" alignItems="center" minHeight="350px" minWidth={{ base: "350px", md: "600px" }}>
            {selectedImage && (
              <Image src={selectedImage.url} alt={selectedImage.alt} maxWidth="100%" maxHeight="100%" />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const ImageBox = ({ children }:any) => (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      {children}
    </Box>
  );

export default ImageGallery;
