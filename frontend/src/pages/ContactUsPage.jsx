import {
  Container,
  Text,
  Flex,
  VStack,
  Image,
  Square,
  Button,
  StackDivider,
} from "@chakra-ui/react";
import cakeroll from "/cake_pictures/cake_roll.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GrInstagram } from "react-icons/gr";

const ContactUsPage = () => {
  const logo_text = "♥︎Contact Us:\n\nInstagram: kasumi.bakery";
  return (
    <Container maxW="container.xl" color="#834D1E">
      <Navbar />

      <Flex pt="20" spacing={20} direction="row">
        <Square flex="2" bg="#F2EEE8" size={{ base: "250px", lg: "550px" }}>
          <Text fontSize={{ base: "10px", lg: "25px" }} whiteSpace="pre-line">
            {logo_text}
            <a
              href="https://www.instagram.com/kasumi.bakery/"
              rel="website noreferrer"
              target="_blank"
            >
              <Button size={{ base: "xs", lg: "lg" }} variant="subtle">
                <GrInstagram />
              </Button>
            </a>
          </Text>
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
