import { Container, Heading, SimpleGrid, Text, Flex, HStack, VStack, Box, Image, Square, Button, StackDivider } from "@chakra-ui/react";
import strawberry_cake from "/strawberry_cake.jpeg"
import { RiImageCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../images/main_logo.jpg";






const HomePage = () => {
	const logo_text = "All\n About\n Cake..."
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
				<Square flex='1' bg='#F2EEE8' size={{ base: "250px", lg: "550px" }}>
			       <Text fontSize={{ base: "30px", lg: "80px" }} whiteSpace="pre-line" as='em'>{logo_text}</Text>
		        </Square>
				<Square flex='2' bg='#F2EEE8' size={{ base: "250px", lg: "550px" }}>
			       
				   <Image  boxSize={{ base: "250px", lg: "550px" }} objectFit='cover'  src={strawberry_cake} alt="strawberry cake" />

		        </Square>	   
			</Flex>
			<VStack 
						maxW={"1140px"} 
						divider={<StackDivider borderColor='gray.200' />}
						align='center'
						pt='50'>
				   <Link to={"/menu"}>
						<Button variant="outline" colorScheme='yellow' as='em' align={"center"}>  
						♥︎Shop now
							
						</Button>
					</Link>

					</VStack>
		</Container>
	);
};
export default HomePage;
