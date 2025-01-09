import { Container, Heading, SimpleGrid, Text, Flex, HStack, VStack, Box, Image, Square, Button, StackDivider } from "@chakra-ui/react";
import cakeroll from "/cake_pictures/cake_roll.jpg";
import { RiImageCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "/main_logo.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import cakeData from "../data/cakeData.js"
import cakeImage from "../utils/cakeImage.js"
import { GrInstagram } from "react-icons/gr";



const ContactUsPage = () => {
	const logo_text = "♥︎Contact Us:\n\n"
	return (
		<Container maxW='container.xl' py={18} color="#834D1E" >
			<Navbar/>

			<Flex pt='20' spacing={20} direction='row' >
				<Square flex='2' bg='#F2EEE8' size={{ base: "250px", lg: "550px" }}>
			       <Text fontSize={{ base: "10px", lg: "25px" }} whiteSpace="pre-line" >
					  {logo_text}
						<a href = 'https://www.instagram.com/kasumi.uk/' rel = "website" target = "_blank" >
						    <Button size={{ base: "xs", lg: "lg" }}  variant='subtle' > 
							   <GrInstagram />
						    </Button> 
							Instagram: kasumi.uk
						</a>
					</Text>
						
		        </Square>

				<Square flex='1' bg='#F2EEE8' size={{ base: "250px", lg: "550px" }}>
				   <Image  boxSize={{ base: "250px", lg: "550px" }} objectFit='cover'  src={cakeroll} alt="cakeroll" />
		        </Square>	   
			</Flex>

			<VStack 
				maxW={"1140px"} 
				divider={<StackDivider borderColor='gray.200' />}
				align='center'
				pt='50'>
			</VStack>

		
		  <Footer/>
		</Container>
	);
};
export default ContactUsPage;
