import { Container, VStack, Box, Flex, Icon, Stack, Image, SimpleGrid, Button, Text, StackDivider} from '@chakra-ui/react'
import { SlSocialInstagram } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

import logo from "../images/main_logo.jpg";


const Footer = () => (
    <Container maxW={"1140px"} px={4} >
      <SimpleGrid
        borderTopWidth={2}
        mt="60px"
        borderTopColor="#834D1E"
        pt="20px"
      >

        <Link to={"/"}>   
        <Image src={logo} 
						boxSize="300px"
						borderRadius="full"
						fit="cover"
						display={"block"}
						margin={"auto"}
						alt="Bake Your Day Instagram"
            pt='20px'
            
						/>  
        </Link>
  
         <Flex
              h={16}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDir={{
                base: "column",
                sm: "row",
              }}>

        <VStack padding='15' 
          maxW={"1140px"} 
          divider={<StackDivider borderColor='gray.200' />}
          align='stretch'
          pt='20'>
         
              <Link to={"/"}>
                <Button color="#834D1E" variant="Subtle" >
                  ♥︎ Menu 
                </Button>
              </Link>

            
             <Link to={"/gallery"}>
             
                <Button color="#834D1E" variant="Subtle" >
                  ♥︎ Gallery
                </Button>
                </Link>

            
                <Link to={"/"}>
                  <Button color="#834D1E" variant="Subtle" >
                    ♥︎ About Us  
                  </Button>
                </Link>
       

           
                <Link to={"/"}> 
                <Button color="#834D1E" variant="Subtle" >
                  ♥︎ Contact Us
                </Button>
                </Link>
          

          
             <Link to={"https://www.instagram.com/bakeyourday.uk/"}>
                <Button color="#834D1E" variant="solid">
                  <AiFillInstagram fontSize={20}  />
                  bakeyourday.uk  
                </Button>
                </Link>
          
        
        </VStack>
        </Flex>
      </SimpleGrid>
    </Container>
);


export default Footer;