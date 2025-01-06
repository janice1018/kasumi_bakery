import { Container, Heading, SimpleGrid, Text, Flex, HStack, VStack, Box, Image, Square, Button, StackDivider } from "@chakra-ui/react";
import cakeroll from "/cake_pictures/cake_roll.jpg";
import { RiImageCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../images/main_logo.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import cakeData from "../data/cakeData.js"
import cakeImage from "../utils/cakeImage.js"
import instagramIcon from "../images/instagram_icon.png"


const ContactUsPage = () => {
	const logo_text = "♥︎Contact Us:\n\n  Instagram: kasumi.uk"
	return (
		<Container maxW='container.2xl' py={18} >
			<Navbar/>

			<Flex pt='10' spacing={20} direction='row' >
				<Square flex='2' bg='#F2EEE8' size={{ base: "250px", lg: "550px" }}>
			       <Text fontSize={{ base: "15px", lg: "30px" }} whiteSpace="pre-line" >{logo_text}</Text>
                     <a href = 'https://www.instagram.com/kasumi.uk/' rel = "website" target = "_blank" >
                     <VStack 
                            maxW={"1140px"} 
                            align='center'
                            pt={{ base: "10", lg: "20" }}>
                                <Image src={instagramIcon} 
                                    boxSize="30px"
                                    borderRadius="full"
                                    alt="Bake Your Day Instagram">
                                </Image>
                    </VStack>
					
					 </a>
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
export default ContactUsPage;
