import { ChakraProvider, Flex, Image } from "@chakra-ui/react";
import { Navigate, Route, Routes, Router } from "react-router-dom";
import "./App.css";
import theme from "./themes/themes";

import { colors } from "./themes/colors";
import Join from "./pages/landingpage/Join";
import routes from "./config/routes";
import { useState } from "react";
import useAuth from "./hooks/useUserInfo";

function App() {
  const { accessAccount, loading } = useAuth();

  return (
    <ChakraProvider theme={theme}>
      <Flex flexDir="column">
        <Routes>
          <>
            {loading ? null : accessAccount ? (
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
                <Route path="*" element={<Navigate to="/feed" />} />
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
          )
        </Routes>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
