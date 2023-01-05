import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import theme from "./themes/themes";
import routes from "./config/routes";
import { useContext } from "react";
import UserProvider, { userContext } from "./context/userContext";

function App() {
  const { accessAccount, loading } = useContext(userContext);

  console.log(accessAccount, "accessAccount", loading, "loading", "app");
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
