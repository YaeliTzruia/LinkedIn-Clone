import { ChakraProvider, Flex, Image } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./misc/Navbar";
import theme from "./themes/themes";

import { colors } from "./themes/colors";
import LandingPage from "./pages/landingpage/LandingPage";
import Join from "./pages/landingpage/Join";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex flexDir="column">
        <Navbar />
        <LandingPage />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
