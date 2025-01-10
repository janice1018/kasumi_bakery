import {
  Button,
  Avatar,
  Center,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { RiHeartAdd2Line } from "react-icons/ri";
import logo from "/main_logo.jpg";

import { RiImageCircleLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.6xl" padding={0}>
      <Flex
        bg="#F2EEE8"
        alignContent={"center"}
        borderRadius="md"
        justifyContent={"center"}
        h={{ base: "20", lg: "28" }}
      >
        <Center>
          <Link to={"/"}>
            <Avatar
              position="relative"
              top={{ base: "2em", lg: "3em" }}
              src={logo}
              boxSize={{ base: "100px", lg: "180px" }}
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
          sm: "column",
          md: "row",
          lg: "row",
        }}
        pt={{ base: "14", lg: "20" }}
      >
        <HStack></HStack>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/menu"}>
            <Button
              variant="ghost"
              color="#834D1E"
              size={{ base: "xs", lg: "md" }}
            >
              Menu
            </Button>
          </Link>

          <Link to={"/aboutus"}>
            <Button
              variant="ghost"
              color="#834D1E"
              size={{ base: "xs", lg: "md" }}
            >
              About Us
            </Button>
          </Link>

          <Link to={"/gallery"}>
            <Button
              variant="ghost"
              color="#834D1E"
              size={{ base: "xs", lg: "md" }}
            >
              Gallery
            </Button>
          </Link>

          <Link to={"/contactus"}>
            <Button
              variant="ghost"
              color="#834D1E"
              size={{ base: "xs", lg: "md" }}
            >
              Contact Us
            </Button>
          </Link>

          <a
            href="https://www.instagram.com/kasumi.uk/"
            rel="website"
            target="_blank"
          >
            <Button
              size={{ base: "sm", lg: "lg" }}
              variant="subtle"
              color="#834D1E"
            >
              <GrInstagram />
            </Button>
          </a>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;
