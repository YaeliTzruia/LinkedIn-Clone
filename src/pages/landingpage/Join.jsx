import { Box, Flex, Heading } from "@chakra-ui/react";
import AppButton from "../../components/AppButton";
// import d from "../../assets/background.png"
export default function Join() {
    return (
        <Flex justifyContent="center" alignItems="center" w="100%">
            <Box
                paddingY="3.75rem"
                boxShadow="0 0 8px 0px white inset"
                backgroundImage="url('images/background.png')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                w="100%"
                h="52.5rem"
            >
                <Flex w="100%" justifyContent="center">
                    <Flex flexDir="column" w="70.5rem" justifyContent="center">
                        <Heading textShadow='0px 0px 0.8px #000000E6' fontWeight={200} fontSize="3.5rem" marginTop="1.25rem" marginBottom="2.5rem" w="70.5rem" h="8.75rem">Join your colleagues, classmates, and friends on LinkedIn.</Heading>


                        <AppButton backgroundColor="#2977c9" _hover={{ backgroundColor: "#1d5d9f" }} color="#fff" h="3.5rem" w="9.471rem" fontSize="1.25rem" fontWeight={600} text="Get Started" />
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}