import {
  Container,
  SimpleGrid,
  Text,
  VStack,
  Box,
  Image,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import NewProductCard from "../components/NewProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  //sort products by updatedAt field
  products.sort(function (x, y) {
    return new Date(x.updatedAt) < new Date(y.updatedAt) ? 1 : -1;
  });

  return (
    <Container maxW="container.xl" py={12}>
      <Navbar />
      <VStack spacing={5} pt="10">
        <Text
          textDecoration="underline"
          textDecorationColor="#9D7252"
          fontSize="28"
          fontWeight="100"
          bgGradient={"linear(to-r, #9D7252, #9D7252)"}
          bgClip={"text"}
        >
          ⋆Menu⋆
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <NewProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
      </VStack>
      <Footer />
    </Container>
  );
};
export default HomePage;
