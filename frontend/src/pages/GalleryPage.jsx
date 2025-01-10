import {
  Container,
  VStack,
  SimpleGrid,
  Heading,
  Text,
  Box,
  HStack,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import Slick from "../components/Slick/Slick";

const GalleryPage = () => {
  return (
    <Container maxW="container.xl" align="center">
      <Navbar />
      <Text
        textDecorationColor="#9D7252"
        fontSize={{ base: "13", lg: "28" }}
        fontWeight="100"
        bgGradient={"linear(to-r, #9D7252, #9D7252)"}
        bgClip={"text"}
        pt={10}
      >
        ⋆ Gallery ⋆
      </Text>
      <Box
        pt={{ base: "2", lg: "6" }}
        bg="#F2EEE8"
        w={{ base: "90%", lg: "40%" }}
        h="full"
        align="center"
      >
        <Slick />
      </Box>
      <Footer />
    </Container>
  );
};

export default GalleryPage;
