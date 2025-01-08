import { Container, VStack, HStack, Box, Flex, Icon, Stack, Image, SimpleGrid, Avatar, Center, Button, Text, StackDivider} from '@chakra-ui/react'
import { SlSocialInstagram } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

import logo from "/main_logo.jpg";


const Footer = () => (
        <Container maxW='container.6xl' pt="20">
            <Flex  alignContent={"center"} justifyContent={"center"} h={{ base: "10", lg: "20" }}>
                  <Center>
                      <Link to={"/"}>   
                            <Avatar position="relative" 
                                    top={{ base: "1em", lg: "1em" }} 
                                    src={logo} 
                                    boxSize={{ base: "80px", lg: "140px" }}                  
                                    borderRadius="full"
                                    alt="logo"/>		
                      </Link>
                   </Center>
            </Flex>	

  
         <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDir='column'
              padding={{ base: "0", lg: "8" }}
              bg='#F2EEE8' 
              borderRadius="md"
              >

        <HStack  
                maxW={"1140px"} 
                divider={<StackDivider borderColor="#E5D7CC" />}
                align='center'
                pt={{ base: "4", lg: "1" }}
                spacing={{ base: "-10px", lg: "20px" }}
             
                >
         
              <Link to={"/menu"}>
                <Button color="#834D1E" variant="Subtle" fontSize={{ base: "10", lg: "14" }} >
                  Menu 
                </Button>
              </Link>

            
             <Link to={"/gallery"}>
             
                <Button color="#834D1E" variant="Subtle" fontSize={{ base: "10", lg: "14" }}>
                  Gallery
                </Button>
                </Link>

            
                <Link to={"/aboutus"}>
                  <Button color="#834D1E" variant="Subtle" fontSize={{ base: "10", lg: "14" }} >
                    About Us  
                  </Button>
                </Link>
       

           
                <Link to={"/contactus"}> 
                <Button color="#834D1E" variant="Subtle" fontSize={{ base: "10", lg: "14" }} >
                  Contact Us
                </Button>
                </Link>
          

          
             <Link to={"https://www.instagram.com/kasumi.uk/"}>
                <Button color="#834D1E" variant="Subtle" fontSize={{ base: "10", lg: "14" }} >
                kasumi.uk 
                  <AiFillInstagram /> 
                </Button>
                </Link>
          
        
        </HStack>
        </Flex>
   
    </Container>
);


export default Footer;