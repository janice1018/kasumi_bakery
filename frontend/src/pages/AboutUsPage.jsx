import {
  Container,
  Text,
  Flex,
  VStack,
  Image,
  Square,
  StackDivider,
} from "@chakra-ui/react";
import orange_flower from "/orange_flower.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import cakeData from "../data/cakeData.js";
import cakeImage from "../utils/cakeImage.js";

const AboutUsPage = () => {
  const logo_text =
    "\n\n\nKasumi translates to Gypsophila (カスミソウ), which is a type of flower — \nsymbolizes a joyful, blessing and encouraging sentiment filled with warmth and positivity\n\n At Kasumi, we don't just bake — we craft moments of happiness";
  return (
    <Container maxW="container.xl">
      <Navbar />

      <Flex pt="20" spacing={20} direction="row">
        <Square flex="2" bg="#F2EEE8" size={{ base: "250px", lg: "550px" }}>
          
          <Text
            fontSize={{ base: "8px", lg: "20px" }}
            whiteSpace="pre-line"
            color="#834D1E"
          >
            Why Kasumi?
            {logo_text}
          </Text>
        </Square>

        <Square flex="1" bg="#F2EEE8" size={{ base: "250px", lg: "550px" }}>
          <Image
            boxSize={{ base: "250px", lg: "550px" }}
            objectFit="cover"
            src={orange_flower}
            alt="orange flower"
          />
        </Square>
      </Flex>

      <VStack
        maxW={"1140px"}
        divider={<StackDivider borderColor="gray.200" />}
        align="center"
        pt="50"
      ></VStack>

      <Flex pt="8" bg="#FCF9F3">
        <Marquee
          gradient={{ base: "true", md: "true", lg: "true" }}
          gradientColor="#FCF9F3"
          speed={35}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          autoFill={true}
        >
          {cakeData.map((cake, id) => (
            <Image
              key={id}
              src={cakeImage(cake)}
              boxSize={{ base: "80px", lg: "140px" }}
              borderRadius="full"
              fit="cover"
              display={"block"}
              margin={"auto"}
              alt={cake}
            />
          ))}
        </Marquee>
      </Flex>
      <Footer />
    </Container>
  );
};
export default AboutUsPage;
