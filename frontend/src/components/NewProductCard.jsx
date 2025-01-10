import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { SlInfo } from "react-icons/sl";
import { useProductStore } from "../store/product";
import { useState } from "react";

const NewProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const textColor = useColorModeValue("#834D1E");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();
  const {
    isOpen: isInfoOpen,
    onOpen: onInfoOpen,
    onClose: onInfoClose,
  } = useDisclosure();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    onUpdateClose();
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "Product updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h="80"
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" color={textColor} mb={1}>
          {product.name}
        </Heading>

        <Text fontWeight="6" fontSize="s" color={textColor} mb={1}>
          £{product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton
            icon={<EditIcon />}
            onClick={onUpdateOpen}
            colorScheme="yellow"
          />
          <IconButton
            icon={<SlInfo />}
            onClick={onInfoOpen}
            colorScheme="orange"
          />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>

      {/* update product modal*/}
      <Modal isOpen={isUpdateOpen} onClose={onUpdateClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Description"
                name="info"
                value={updatedProduct.info}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, info: e.target.value })
                }
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    image: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Allergens"
                name="allergens"
                value={updatedProduct.allergens}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    allergens: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Cake Size"
                name="productSize"
                value={updatedProduct.productSize}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    productSize: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Vegetarian (Yes / No)"
                name="vegetarian"
                value={updatedProduct.vegetarian}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    vegetarian: e.target.value,
                  })
                }
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="yellow"
              mr={3}
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update
            </Button>
            <Button variant="ghost" onClick={onUpdateClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* more info modal*/}
      <Modal isOpen={isInfoOpen} onClose={onInfoClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={textColor} align="center">
            ♥︎ Information ♥︎
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
                ♥︎ {product.name} ♥︎
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
            <Button colorScheme="yellow" mr={3} onClick={onInfoClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default NewProductCard;
