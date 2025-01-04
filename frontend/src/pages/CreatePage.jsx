import { Box, Container, VStack, Heading, useColorModeValue, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { set } from "mongoose";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();

  const { createProduct } =useProductStore()

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct);
    if(!success) {
      toast({
        title:"Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW={"container.lg"}>
      <Navbar/>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8} padding='10'>
          Create New Product
        </Heading>

        
          <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
            <VStack spacing={4}>
              <Input
                placeholder='Product Name'
                name='name'
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              <Input
                placeholder='Price'
                name='price'
                type='number'
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
              <Input
                placeholder='Image URL'
                name='image'
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />

              <Button colorScheme='yellow' onClick={handleAddProduct} w='full'>
                Add Product
              </Button>
            </VStack>
          </Box>
        </VStack>
        <Footer/>
      </Container>
    );
};
export default CreatePage;