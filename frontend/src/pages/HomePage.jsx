import { Avatar, Center, Container, Heading, SimpleGrid, Text, Flex, HStack, VStack, Box, Image, Square, Button, StackDivider } from "@chakra-ui/react";
import new_strawberry from "/cake_pictures/new_strawberry.jpg"
import { RiImageCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "/main_logo.jpg";
import Marquee from "react-fast-marquee";
import cakeData from "../data/cakeData.js"
import cakeImage from "../utils/cakeImage.js"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '@fontsource-variable/playwrite-be-wal';




const HomePage = () => {
    const logo_text = "ALL\n ABOUT\n CAKE...\n"

    return (
		
        <Container maxW='container.xl'  >

			<Flex bg='#F2EEE8' alignContent={"center"} justifyContent={"center"}  borderRadius="md">
		        <Center>
                    <Link to={"/"}>   
						<Avatar position="relative" top={{ base: "3em", lg: "4em" }} src={logo} boxSize={{ base: "120px", lg: "180px" }}
									borderRadius="full"
									alt="logo"
                        />		
			        </Link>
			    </Center>
            </Flex>	
			<Link to={"/menu"}>
			    <Flex pt={{ base: "20", lg: "90" }}   >
					<Square flex='1.5' bg='#F2EEE8' size={{ base: "250px", lg: "550px" }}  borderRadius="md">
					<Text fontSize={{ base: "26px", lg: "80px" }} as="em" pt={{ base: "3", lg: "10" }} 
					      color="#834D1E" whiteSpace="pre-line" >
							{logo_text} 
						  
						 
						  </Text>
					
						  
					</Square>
					

					<Square flex='1' bg='#F2EEE8' size={{ base: "250px", lg: "550px" }} borderRadius="md" pt={6}  >  
					<Image boxSize={{ base: "180px", lg: "500px" }} objectFit='cover' 
							borderRadius="md"  src={new_strawberry} alt="strawberry cake" />
					
					</Square>
						   
			    </Flex>
			</Link>

			<VStack 
				
				divider={<StackDivider borderColor='gray.800' />}
				alignContent={"center"} justifyContent={"center"}
				pt='10'
				pb='10'
				>
				<Center>
				   <Link to={"/menu"}>
						<Button variant="outline" borderWidth="2px" borderColor="#D6C6BA" color="#834D1E" >  
						  SHOP NOW
						</Button>
					</Link>
					</Center>
			</VStack>

		</Container>
	);
};
export default HomePage;
