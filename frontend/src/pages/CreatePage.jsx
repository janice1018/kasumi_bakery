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
                placeholder='Description'
                name='info'
                value={newProduct.info}
                onChange={(e) => setNewProduct({ ...newProduct, info: e.target.value })}
              />
              <Input
                placeholder='Image URL'
                name='image'
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />
               <Input
                placeholder='Allergens'
                name='allergens'
                value={newProduct.allergens}
                onChange={(e) => setNewProduct({ ...newProduct, allergens: e.target.value })}
              />
               <Input
                placeholder='Product Size'
                name='productSize'
                value={newProduct.productSize}
                onChange={(e) => setNewProduct({ ...newProduct, productSize: e.target.value })}
              />
               <Input
                placeholder='Vegetarian'
                name='vegetarian'
                value={newProduct.vegetarian}
                onChange={(e) => setNewProduct({ ...newProduct, vegetarian: e.target.value })}
              />
              <Input
                placeholder='Price'
                name='price'
                type='number'
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
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