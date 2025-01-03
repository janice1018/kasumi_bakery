import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop/BackToTop";
import Footer from "./components/Footer";

function App() {
	return (
		<Box minH={"100vh"} bg={useColorModeValue("warmGray.500", "gray.900")}>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage />} />
				<Route path='/gallery' element={<GalleryPage />} />
			</Routes>
			<BackToTop/>
			<Footer/>
		</Box>
	);
}
export default App;