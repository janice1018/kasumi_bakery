import { Image, Container, VStack, SimpleGrid,Heading, HStack, Flex } from "@chakra-ui/react"
import gallery_picture_1 from "/gallery_picture_1.jpg"
import gallery_picture_2 from "/gallery_picture_2.jpg"
import gallery_picture_3 from "/gallery_picture_3.jpg"
import gallery_picture_4 from "/gallery_picture_4.jpg"
import gallery_picture_5 from "/gallery_picture_5.jpg"
import gallery_picture_6 from "/gallery_picture_6.jpg"
import gallery_picture_7 from "/gallery_picture_7.jpg"

const GalleryPage = () => {
  
	return (
		<Container maxW='container.lg' py={12}>
		  <Heading size={"xl"} pt="100px" letterSpacing={"8"} textAlign={"center"} mb={18} padding='9' color={"#9D7252"}>
			Gallery 
		  </Heading>
		   

            <HStack spacing={10} alignItems={"center"}>
	          <SimpleGrid columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"} >

				<Image borderRadius='full' src={gallery_picture_1} alt="gallery_picture_1" />
				<Image rounded="md" src={gallery_picture_2} alt="gallery_picture_2" />
				<Image borderRadius='full' src={gallery_picture_3} alt="gallery_picture_3" />
				<Image rounded="md" src={gallery_picture_5} alt="gallery_picture_5" />
				<Image borderRadius='full' src={gallery_picture_6} alt="gallery_picture_6" />
				<Image borderRadius='full' src={gallery_picture_7} alt="gallery_picture_7" />

	          </SimpleGrid>
	        </HStack>
	 </Container>
	);
};

export default GalleryPage;

