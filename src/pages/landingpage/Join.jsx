import { Box, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import AppButton from "../../components/AppButton";
// import d from "../../assets/background.png"
export default function Join() {

    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");

    return (
        <Flex justifyContent="center" alignItems="center" w="100%">

            <Box
                {...!isSmallScreen &&
                {
                    paddingY: "3.75rem",
                    boxShadow: "0 0 8px 0px white inset",
                    backgroundImage: "url('images/background.png')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    w: "100%",
                    h: "52.5rem",
                }}

            >
                <Flex w="100%" justifyContent="center">
                    <Flex paddingX={["1rem", "1rem", "0", "0"]} paddingY={["3.5rem", "3.5rem", "0", "0"]} flexDir="column" w={["100%", "100%", "70.5rem", "70.5rem"]} justifyContent="center">
                        <Heading marginBottom={["1.5rem", "1.5rem", "2.5rem", "2.5rem"]} textShadow='0px 0px 0.8px #000000E6' fontWeight={[300, 300, 200, 200]} fontSize={["2rem", "2rem", "3.5rem", "3.5rem"]} marginTop={["0", "0", "1.25rem", "1.25rem"]} w={["100%", "100%", "70.5rem", "70.5rem"]} >Join your colleagues, classmates, and friends on LinkedIn.</Heading>
                        {/* h="8.75rem" */}

                        <AppButton backgroundColor="#2977c9" _hover={{ backgroundColor: "#1d5d9f" }} color="#fff" h="3.5rem" w="9.471rem" fontSize="1.25rem" fontWeight={600} text="Get Started" />
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}