import { Container, SimpleGrid, Text, VStack, Box, Image } from "@chakra-ui/react";
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
	products.sort(function (x, y){
		return new Date(x.updatedAt) < new Date(y.updatedAt) ? 1 : -1;
	})
	const menu_text ="📍Birmingham UK \n\n⋆  Japanese style cakes  ⋆"
	return (
    
		<Container maxW='container.xl' >
          <Navbar/>
			<VStack spacing={5} pt={20} >
			    <Text
					fontSize={{ base: "13px", lg: "20px" }} 
					bgGradient={"linear(to-r, #9D7252, #DFC5A4)"}
					bgClip={"text"}
					pt="2">			 
					  {menu_text}
				</Text>
				<Text
					fontSize={{ base: "13px", lg: "20px" }} 
					bgGradient={"linear(to-r, #9D7252, #DFC5A4)"}
					bgClip={"text"}>			 
				       ⋆Food Hygiene and Safety Level 2⋆
				</Text>
				
				<Text
					textDecoration="underline"
					textDecorationColor="#9D7252"
					fontSize="28"
					fontWeight="100"
					bgGradient={"linear(to-r, #9D7252, #DFC5A4)"}
					bgClip={"text"}
					>
						
					   ⋆Menu⋆
				</Text>
				
				<SimpleGrid   bg="#F1EBE6"
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>
				
				{products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>

					
				)}
			</VStack>
      <Footer/>
		</Container>
	);
};
export default HomePage;
