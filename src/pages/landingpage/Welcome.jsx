import { Center, Divider, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";



import welcome from "../../assets/welcome.svg"
import AppButton from "../../components/AppButton";
import AppInputField from "../../components/AppInputField";
import { colors } from "../../themes/colors";
import google from "../../assets/google.png"
import { useNavigate } from "react-router-dom";

export default function Welcome() {

    const navigate = useNavigate()

    return (
        <Flex>
            <Flex paddingTop={["1.5rem", "1.5rem", "2.5rem", "2.5rem"]} w={["100%", "26.5rem", "100%", "100%"]} flexDir="column">
                <Flex flexDir={["column", "column", "row", "row"]} w={["20.5rem", "26.5rem", "100%", "100%"]} paddingX={["1rem", "1rem", "0", "0"]} marginLeft={[null, null, "4.7rem", "24.75rem"]} h={["48.2rem", "48.2rem", "38.149rem", "38.149rem"]}>
                    {/* <Flex > */}
                    <Flex flexDir={["column", "column", "flex", "flex"]} paddingRight={["0", "0", "2.625rem", "2.625rem"]} w={["20.5rem", "20.5rem", "38.775rem", "38.775rem"]} >
                        <Heading marginBottom={["1.5rem", "1.5rem", "2rem", "2rem"]} fontSize={["2rem", "2rem", "3.5rem", "3.5rem"]} w={["20.5rem", "20.5rem", "36.15rem", "36.15rem"]} textShadow="1px 0px 0.5px #8f5849" fontWeight={[300, 300, 200, 200]} as="h1" color="#8f5849">Welcome to your professional community</Heading>
                        <Flex paddingTop="0.313rem" h="26.5rem" w={["100%", "23.875rem", "25.5rem", "25.5rem"]} colors="#000000E6" flexDir="column">

                            <Flex h="15rem" flexDir="column">

                                <Flex justifyContent="space-between" h="6.7rem" flexDir="column">
                                    <AppInputField text="Email or phone number" border={`1px solid rgba(0,0,0,0.6)`} borderRadius="0.125rem" buttonW={["20.5rem", "24rem", "100%", "100%"]} buttonH={["3rem", "3rem", "3rem", "3rem"]} />
                                    <AppInputField btnMargin="0" w={["20.5rem", "24rem", "100%", "100%"]} isPassword text="Password" border={`1px solid rgba(0,0,0,0.6)`} borderRadius="0.125rem" buttonH="3rem" />
                                </Flex>
                                <Link activeClass="active"
                                    marginBottom="1.5rem" marginTop="1rem" fontWeight={500} color={colors.primaryText}>Forgot password?</Link>

                                <AppButton onClick={() => {
                                    navigate("./signin")
                                }} backgroundColor="#2977c9" _hover={{ backgroundColor: "#1d5d9f" }} h="3.5rem" color="#fff" w="100%" fontSize="1.3rem" text="Sign in" />
                            </Flex>
                            <Flex marginY="1rem" paddingX="0.75rem" justifyContent="center" align="center">
                                <Center border="0.063rem" color="#000000E6" orientation='horizontal' w="10.584rem" > <Divider />
                                </Center>
                                <Text color="#00000099" fontSize="14px" paddingX="1rem">or</Text>
                                <Center border="0.063rem" color="#000000E6" orientation='horizontal' w="10.584rem">
                                    <Divider />
                                </Center>
                            </Flex>
                            <Flex justifyContent="space-between" h="8rem" flexDir="column">
                                <AppButton left _hover={{ backgroundColor: colors.background, color: colors.primaryText }} paddingX="2rem" color={colors.linkText} border={`1px solid rgba(0,0,0,0.6)`} backgroundColor="white" image={true} src={google} fontWeight={400} h="3.5rem" w="100%" fontSize="1.3rem" text="Sign in with Google" />

                                <AppButton onClick={() => {
                                    navigate("./signup")
                                }} color={colors.buttonLabelBlack} border={`1px solid rgba(0,0,0,0.6)`} backgroundColor="white" _hover={{ backgroundColor: colors.background, color: colors.primaryText }} h="3.5rem" w="100%" fontSize="1.3rem" text="New to inkedIn? Join now" />
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex justifyContent={["center", "center", "normal", "normal"]}>
                        <Image flexShrink={1} marginTop="1.563rem" zIndex={-1} position="absolute" src={welcome} h={["13.375rem", "13.375rem", "35rem", "35rem"]} w={["23.375rem", "23.375rem", "43.7rem", "43.7rem"]} />
                    </Flex>


                </Flex>
                {/* </Flex> */}

            </Flex>
        </Flex>
    )
}
