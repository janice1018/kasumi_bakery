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
import ProductCard from "../components/ProductCard";
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
  const menu_text = "📍Birmingham UK \n\n⋆  Japanese style cakes  ⋆";
  return (
    <Container maxW="container.xl">
      <Navbar />
      <VStack spacing={5} pt={20}>
        <Text
          textDecorationColor="#9D7252"
          fontSize={{ base: "20", lg: "28" }}
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
          w="80%"
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            No products found 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
      <Footer />
    </Container>
  );
};
export default HomePage;
