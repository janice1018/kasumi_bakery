import { Image, Container, VStack, SimpleGrid,Heading, Text, Box, HStack, Flex } from "@chakra-ui/react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import cakeData from "../data/cakeData.js"
import cakeImage from "../utils/cakeImage.js"
import gallery_picture_1 from "/gallery_pictures/gallery_picture_1.jpg"
import gallery_picture_2 from "/gallery_pictures/gallery_picture_2.jpg"
import gallery_picture_3 from "/gallery_pictures/gallery_picture_3.jpg"
import gallery_picture_5 from "/gallery_pictures/gallery_picture_5.jpg"
import gallery_picture_6 from "/gallery_pictures/gallery_picture_6.jpg"
import gallery_picture_7 from "/gallery_pictures/gallery_picture_7.jpg"

import React from "react";
import Slider from "react-slick";
import Slick from "../components/Slick/Slick"

const GalleryPage = () => {
		
				return (
					<Container  maxW='container.xl' align="center">
          				<Navbar />
						  <Text
								textDecorationColor="#9D7252"
								fontSize={{ base:"13", lg:"28"}}
								fontWeight="100"
								bgGradient={"linear(to-r, #9D7252, #9D7252)"}
								bgClip={"text"}
								pt={10}
								>
								⋆ Gallery ⋆
						 </Text>
					        	<Box  pt={{ base: "2", lg: "6" }} bg="#FDF6E9" w='60%' align="center" >
							       <Slick  />
								</Box>
						<Footer/>
					</Container>
				);
};


{/*
const GalleryPage = () => {
  
	return (
		<Container maxW='container.xl' py={12} >
		<Navbar/>
		  <Heading size={"xl"} pt="100px" letterSpacing={"8"} textAlign={"center"} mb={18} padding='9' color={"#9D7252"}>
		  Gallery 
		  </Heading>
		   

            <HStack spacing={10} alignItems={"center"} bg="#F1EBE6">
	          <SimpleGrid columns={{
						base: 3,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"} >

				<Image rounded="md"  src={gallery_picture_1} alt="gallery_picture_1" />
				<Image rounded="md"  src={gallery_picture_2} alt="gallery_picture_2" />
				<Image rounded="md"  src={gallery_picture_3} alt="gallery_picture_3" />
				<Image rounded="md" src={gallery_picture_5} alt="gallery_picture_5" />
				<Image borderRadius='full' src={gallery_picture_6} alt="gallery_picture_6" />
				<Image rounded="md" src={gallery_picture_7} alt="gallery_picture_7" />

	          </SimpleGrid>
	        </HStack>
			
			<Flex pt='20' spacing={20} >
			    <Marquee radient={false} speed={40} pauseOnHover={true} pauseOnClick={true} 
  					     delay={0} play={true} direction="left" loop={6} autoFill={true}   >

				    {cakeData.map((cake, id) => (

					<Image src={cakeImage(cake)} 
						boxSize={{ base: "100px", lg: "160px" }}
						borderRadius="full"
						fit="cover"
						display={"block"}
						margin={"auto"}
						alt={cake}
					 />
			        ))}
				</Marquee>
			</Flex>
		<Footer/>
	 </Container>
	);
};
*/}
export default GalleryPage;

