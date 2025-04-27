import {
  Container,
  Text,
  Flex,
  VStack,
  HStack,
  Stack,
  Image,
  Square,
  Button,
  StackDivider,
  Heading,
  Tooltip,
  useClipboard,
  IconButton,
  Box,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { MdEmail, MdOutlineEmail } from 'react-icons/md'
import { BsPerson} from 'react-icons/bs'
import cakeroll from "/cake_pictures/cake_roll.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GrInstagram } from "react-icons/gr";

const ContactUsPage = () => {
  const logo_text = "Contact Us:\n\nInstagram: kasumi.bakery";
  const order_msg = " \n\nGet in Touch" ;
  const { hasCopied, onCopy } = useClipboard('kasumibakery@gmail.com');
  const toast = useToast();

  return (
    <Container maxW="container.xl" color="#834D1E">
      <Navbar />

      <Flex pt="20" spacing={10} direction="row">
        <Square flex="2" bg="#F2EEE8" size={{ base: "250px", lg: "550px" }}>

            <VStack spacing={{ base: 2, lg: 2 }} >
              <Heading
                fontSize={{
                  base: '2xl',
                  lg: '3xl',
                }}>
                Get in Touch
              </Heading>
                <Text>
                Drop us a note and we’ll get back to you as quickly as possible.
                </Text>

            <Stack
              pt="2"
              spacing={{ base: 4, lg: 10 }}
              direction={{ base: 'column', lg: 'row' }}
              >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}
                >
                
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    color="#9D7252"
                    _hover={{
                      bg: 'yellow.100',
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Box as="a" href="#">
                <a
              href="https://www.instagram.com/kasumi.bakery/"
              rel="website noreferrer"
              target="_blank"
            >
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    color="#9D7252"
                    icon={<GrInstagram />}
                    _hover={{
                      bg: 'yellow.100',
                    }}
                    isRound
                  />
                  </a>
                  
                </Box>
                </Stack>

                <Box
                bg="#FFFBF8"
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5}>
                <HStack>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Phone Number</FormLabel>

                    <InputGroup>
                     
                      <Input type="text" name="name" placeholder="Your Phone Number" />
                    </InputGroup>
                  </FormControl>
                  </HStack>
                
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input type="email" name="email" placeholder="Your Email" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    colorScheme="orange"
                    bg="#9D7252"
                    color="white"
                    _hover={{
                      bg: '#EDDAC8',
                    }}
                    width="full"
                    onClick={() =>
                      toast({
                        title: 'Message sent',
                        description: "We'll get back to you ASAP!",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                        colorScheme:"green"
                      })
                    }
                   > 
                    Send Message
                  </Button>

                  </VStack>
                  </Box>

                </Stack>
                
                </VStack>


           
        

          
        </Square>

        <Square flex="1" bg="#F2EEE8" size={{ base: "250px", lg: "550px" }}>
          <Image
            boxSize={{ base: "250px", lg: "550px" }}
            objectFit="cover"
            src={cakeroll}
            alt="cakeroll"
          />
        </Square>
      </Flex>

      <VStack
        maxW={"1140px"}
        divider={<StackDivider borderColor="gray.200" />}
        align="center"
        pt="50"
      ></VStack>

      <Footer />
    </Container>
  );
};
export default ContactUsPage;
