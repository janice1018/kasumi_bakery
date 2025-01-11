import {
  Box,
  Button,
  Heading,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import "@fontsource/yeseva-one";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("#834D1E");

  const {
    isOpen: isInfoOpen,
    onOpen: onInfoOpen,
    onClose: onInfoClose,
  } = useDisclosure();

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h="300"
        w="full"
        objectFit="cover"
        onClick={onInfoOpen}
      />

      <Box p={2} onClick={onInfoOpen}>
        <Heading as="h3" size="sm" align="center" color={textColor} mb={1}>
          {product.name}
        </Heading>

        <Text
          fontSize="sm"
          align="center"
          color={textColor}
          fontFamily={"'Yeseva One', system-ui;"}
        >
          £{product.price}
        </Text>

        <VStack align="center">
          <Button variant="subtle">
            <IconButton
              icon={<FiInfo />}
              size="lg"
              variant="subtle"
              onClick={onInfoOpen}
              color="#834D1E"
            />
          </Button>
        </VStack>
      </Box>

      {/* more info modal*/}
      <Modal isOpen={isInfoOpen} onClose={onInfoClose}>
        <ModalOverlay />
        <ModalContent bg="#FCF9F3">
          <ModalHeader color={textColor} align="center">
            {" "}
            Information{" "}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Image
                src={product.image}
                alt={product.name}
                h="full"
                w="full"
                objectFit="cover"
                border="2px"
                borderColor="#9D7252"
                rounded="d"
              />
              <Text fontSize="l" align="center" color={textColor}>
                {" "}
                ⋆ {product.name} ⋆{" "}
              </Text>
              <Text fontSize="xs" align="center" color={textColor}>
                {" "}
                {product.info}
              </Text>
              <Text fontSize="xs" color={textColor}>
                Allergens: {product.allergens}
              </Text>
              <Text fontSize="xs" color={textColor}>
                Size: {product.productSize}
              </Text>
              <Text fontSize="xs" color={textColor}>
                Vegetarian: {product.vegetarian}
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button color="#9D7252" mr={1} onClick={onInfoClose} fontSize="xs">
              Back to Menu
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default ProductCard;
