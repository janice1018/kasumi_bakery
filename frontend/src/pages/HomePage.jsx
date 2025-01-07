import { Avatar, Center, Container, Heading, SimpleGrid, Text, Flex, HStack, VStack, Box, Image, Square, Button, StackDivider } from "@chakra-ui/react";
import strawberry_cake from "/cake_pictures/strawberry_cake.jpeg"
import { RiImageCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../images/main_logo.jpg";
import Marquee from "react-fast-marquee";
import cakeData from "../data/cakeData.js"
import cakeImage from "../utils/cakeImage.js"
import Navbar from "../components/Navbar";


const HomePage = () => {
    const logo_text = "All\n About\n Cake..."

    return (
		
        <Container maxW='container.xl' >

			<Flex bg='#F2EEE8' alignContent={"center"} justifyContent={"center"}>
		        <Center>
                    <Link to={"/"}>   
						<Avatar position="relative" top="5em" src={logo} boxSize={{ base: "150px", lg: "280px" }}
									borderRadius="full"
									alt="logo"
                        />		
			        </Link>
			    </Center>
            </Flex>	
			<Link to={"/menu"}>
			    <Flex pt={{ base: "40", lg: "40" }} spacing={20} direction='row'  >
					<Square flex='1' bg='#F2EEE8' size={{ base: "250px", lg: "550px" }} >
					<Text fontSize={{ base: "30px", lg: "80px" }} whiteSpace="pre-line" as='em'>{logo_text}</Text>
					</Square>

					<Square flex='2' bg='#F2EEE8' size={{ base: "250px", lg: "550px" }}>  
					<Image  boxSize={{ base: "250px", lg: "550px" }} objectFit='cover'  src={strawberry_cake} alt="strawberry cake" />
					</Square>	   
			    </Flex>
			</Link>

			<VStack 
				
				divider={<StackDivider borderColor='gray.800' />}
				alignContent={"center"} justifyContent={"center"}
				pt='50'
				pb='20'
				>
				<Center>
				   <Link to={"/menu"}>
						<Button variant="outline">  
						♥︎  Shop Now
						</Button>
					</Link>
					</Center>
			</VStack>
		</Container>
	);
};
export default HomePage;
