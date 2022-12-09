import { ChakraProvider, Flex, Image } from "@chakra-ui/react";
import { Navigate, Route, Routes, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./misc/Navbar";
import theme from "./themes/themes";

import { colors } from "./themes/colors";
import LandingPage from "./pages/landingpage/LandingPage";
import Join from "./pages/landingpage/Join";
import routes from "./config/routes";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <ChakraProvider theme={theme}>
      <Flex flexDir="column">
        <Router>
          <Navbar />

          <Routes>
            {/* <Router> */}
            <Navbar />
            <>
              {!loading && loggedIn ? (
                <>
                  {routes
                    .filter((r) => r.protected)
                    .map((route) => (
                      <Route
                        path={route.path}
                        key={route.path}
                        element={route.component}
                      />
                    ))}
                  <Route path="*" element={<Navigate to="/" />} />
                </>
              ) : (
                <>
                  {routes
                    .filter((r) => !r.protected)
                    .map((route) => (
                      <Route
                        path={route.path}
                        key={route.path}
                        element={route.component}
                      />
                    ))}
                  <Route path="*" element={<Navigate to="/" />} />
                </>
              )}
            </>
            ){/* </Router> */}
          </Routes>
        </Router>
        {/* <Navbar />
        <LandingPage /> */}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
