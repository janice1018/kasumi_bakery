import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/product";
import { useEffect } from "react";

const GalleryPage = () => {
    const { fetchProducts, products } = useProductStore();
	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

    return <div>


<Container maxW='container.xl' py={12}>
			<VStack spacing={5}>
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
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>
			</VStack>
		</Container>
    </div>;

};

export default GalleryPage;
