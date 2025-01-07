import { Button, Avatar, Center, Container, Flex, HStack, Text, useColorMode, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { RiHeartAdd2Line } from "react-icons/ri";
import logo from "../images/main_logo.jpg";
import instagramIcon from "../images/instagram_icon.png"
import { RiImageCircleLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";



const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		
        <Container maxW='container.6xl' >
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

			    <Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			    >

				
				<Text
					fontSize={{ base: "20", lg: "30" }}
					fontWeight={"1"}
					textAlign={"left"}
					bgGradient={"linear(to-r, #834D1E, #834D1E)"}
					bgClip={"text"}
					fontFamily={"'Yeseva One', system-ui;"}
					letterSpacing={"8"}
				>
			        <Link to={"/"}> ♥︎ Bake Your Day ♥︎   </Link>
				</Text>
				
			

				<HStack spacing={2} alignItems={"center"}>
					<Link to={"/menu"}>
						<Button variant="ghost" size={{ base: "xs", lg: "md" }}>  
							Menu
						</Button>
					</Link>

					<Link to={"/aboutus"}>
						<Button variant="ghost" size={{ base: "xs", lg: "md" }}>  
							About Us
						</Button>
					</Link>

					<Link to={"/gallery"}>
						<Button variant="ghost" size={{ base: "xs", lg: "md" }}>  
							Gallery
							</Button>
					</Link>

					<Link to={"/contactus"}>
						<Button variant="ghost" size={{ base: "xs", lg: "md" }}>  
							Contact Us
						</Button>
					</Link>

					<a href = 'https://www.instagram.com/kasumi.uk/' rel = "website" target = "_blank" >
						    <Button size={{ base: "sm", lg: "lg" }}  variant='subtle' > 
							   <GrInstagram />
						    </Button> 
			
					</a>
					
				</HStack>
			</Flex>
		</Container>
	);
};
export default Navbar;