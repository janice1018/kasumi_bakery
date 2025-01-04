import { Container, Heading, SimpleGrid, Text, Flex, HStack, VStack, Box, Image, Square, Button, StackDivider } from "@chakra-ui/react";
import orange_flower from "/orange_flower.jpg"
import { RiImageCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../images/main_logo.jpg";






const HomePage = () => {
	const logo_text = "Why Kasumi?\n\nKasumi (霞草) translates to Gypsophila (滿天星), which is a type of flower.\n I am particularly fond of the flower language associated with orange gypsophila.\n\n The flower language for Orange Gypsophila (橙色滿天星花) symbolizes a joyful, blessing and encouraging sentiment filled with warmth and positivity.\n\n Kasumi's mission is to spread this goodness to every patron."
	return (
		<Container maxW='container.2xl' py={18} >
			<Link to={"/"}>   
			    <Image src={logo} 
				
						boxSize={{ base: "150px", lg: "280px" }}
						borderRadius="full"
						fit="cover"
						display={"block"}
						margin={"auto"}
						alt="Bake Your Day Instagram"
						
						>
							

				</Image>
			</Link>

			<Flex pt='10' spacing={20} direction='row' >
				<Square flex='2' bg='#F2EEE8' size={{ base: "250px", lg: "550px" }}>
			       <Text fontSize={{ base: "10px", lg: "20px" }} whiteSpace="pre-line" as='em'>{logo_text}</Text>
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
		</Container>
	);
};
export default HomePage;
