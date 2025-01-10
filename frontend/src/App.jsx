import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import MenuPage from "./pages/MenuPage";
import EditPage from "./pages/EditPage";
import ContactUsPage from "./pages/ContactUsPage";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import AboutUsPage from "./pages/AboutUsPage";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  return (
    <Box minH={"100vh"} bg={"#FCF9F3"}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <BackToTop />
    </Box>
  );
}
export default App;
