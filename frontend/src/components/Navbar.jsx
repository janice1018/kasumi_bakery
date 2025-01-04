import { Button, Container, Flex, HStack, Text, useColorMode, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { RiHeartAdd2Line } from "react-icons/ri";
import logo from "../images/main_logo.jpg";
import instagramIcon from "../images/instagram_icon.png"
import { RiImageCircleLine } from "react-icons/ri";



const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		
		<Container maxW={"1140px"} px={4}>
			<Link to={"/"}>   
			    <Image src={logo} 
				
						boxSize={{ base: "200px", lg: "350px" }}
						borderRadius="full"
						fit="cover"
						display={"block"}
						margin={"auto"}
						alt="Bake Your Day Instagram"
						>
				</Image>
			</Link>

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
					<Link to={"/create"}>
						<Button variant="ghost" size={{ base: "xs", lg: "md" }}>
							Create 
							<RiHeartAdd2Line fontSize={20} color={"brown"} />
						</Button>
					</Link>
					<Link to={"/gallery"}>
						<Button variant="ghost" size={{ base: "xs", lg: "md" }}>  
							Gallery
						    <RiImageCircleLine fontSize={20} color={"brown"}/>
							</Button>
					</Link>
					
					
					
					<a href = 'https://www.instagram.com/bakeyourday.uk/' rel = "website" target = "_blank" >
					
					<Image src={instagramIcon} 
						boxSize="30px"
						borderRadius="full"
						fit="cover"
						alt="Bake Your Day Instagram">
					</Image>
					
					</a>
					

					
				</HStack>
			</Flex>
		</Container>
	);
};
export default Navbar;