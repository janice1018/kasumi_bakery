import { Container, Heading, SimpleGrid, Text, Flex, HStack, VStack, Box, Image, Square, Button, StackDivider } from "@chakra-ui/react";
import orange_flower from "/orange_flower.jpg"
import { RiImageCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../images/main_logo.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import cakeData from "../data/cakeData.js"
import cakeImage from "../utils/cakeImage.js"


const HomePage = () => {
	const logo_text = "Why Kasumi?\n\n\n\nKasumi (霞草) translates to Gypsophila (滿天星), which is a type of flower.\n\n I am particularly fond of the flower language associated with orange gypsophila.\n\n The flower language for Orange Gypsophila symbolizes a joyful, blessing and encouraging sentiment filled with warmth and positivity.\n\n Kasumi's mission is to spread this goodness to every patron."
	return (
		<Container maxW='container.xl' py={18}  >
			<Navbar/>

			<Flex pt='10' spacing={20} direction='row' >
				<Square flex='2' bg='#F2EEE8' size={{ base: "250px", lg: "550px" }}>
			       <Text fontSize={{ base: "8px", lg: "20px" }} whiteSpace="pre-line" as='em' color="#834D1E">{logo_text}</Text>
		        </Square>

				<Square flex='1' bg='#F2EEE8' size={{ base: "250px", lg: "550px" }}>
				   <Image  boxSize={{ base: "250px", lg: "550px" }} objectFit='cover'  src={orange_flower} alt="orange flower" />
		        </Square>	   
			</Flex>

			<VStack 
				maxW={"1140px"} 
				divider={<StackDivider borderColor='gray.200' />}
				align='center'
				pt='50'>
			</VStack>

			<Flex  spacing={20}>
			    <Marquee 
						gradient={{base: 'false', md: 'true', lg: 'true'}} 
						speed={40}
						pauseOnHover={true} 
						pauseOnClick={true} 
  					    delay={0} 
						play={true} 
						direction="left" 
						autoFill={true} >

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
export default HomePage;
