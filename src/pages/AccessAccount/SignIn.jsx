import { Divider, Flex, Image, Center, Text, Link, Heading, useMediaQuery } from "@chakra-ui/react";
import logo from "../../assets/svg/linkedin.svg"
import AppButton from "../../components/AppButton";
import AppInputField from "../../components/AppInputField";
import useSignIn from "../../hooks/useSignIn";
import CopyRight from "../../misc/footer/CopyRight";
import google from "../../assets/google.png"
import apple from "../../assets/apple-logo.png"
import { colors } from "../../themes/colors";
export default function SignIn() {
    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");
    const { loginUser, passwordProps, emailProps, error } = useSignIn()

    const shadow = "0 4px 12px rgb(0 0 0 / 15%)"

    const loginOption = [
        {
            icon: google,
            text: "Sign in with Google"
        },
        {
            icon: apple,
            text: "Sign in with Apple"
        }
    ]

    return (
        <Flex justifyContent="center" flexDir="column" w="100%">
            < Flex paddingTop={["2rem", "2rem", "2rem", "2rem"]} paddingLeft={["2rem", "2rem", "3.5rem", "3.5rem"]} w={["100%", "100%", "70.5rem", "70.5rem"]} >
                <Image w="6.8rem" h="1.75rem" src={logo} alt="LinkedIn logo name" />
            </Flex >
            <Flex justifyContent="center" flexDir=" column" alignItems="center" w="100%" h={[null, null, "37.5rem", "60.5rem"]}>
                <Flex boxShadow={[null, null, shadow, shadow]} flexDir="column" borderRadius="0.5rem" padding="1.5rem" w={["100%", "100%", "22rem", "22rem"]} h={["30.5rem", "31.7rem", "31.999rem", "31.999rem"]} backgroundColor="white">
                    <Flex paddingLeft={["0.55rem", "0.55rem", "0", "0"]} marginBottom="1rem" flexDir="column">
                        <Heading fontWeight={700} fontSize="2rem">Sign in</Heading>
                        <Text fontSize="0.875rem">Stay updated on your professional world</Text>
                    </Flex>
                    <Flex w={["100%", "100%", "19rem", "19rem"]} justifyContent="space-between" flexDir="column">
                        <form onSubmit={loginUser}>


                            <AppInputField variant="floating" fontSize="1.125rem" paddingX="0.75rem" paddingBottom="0.375rem" paddingTop="1.75rem" color="black" border="rgba(0,0,0,0.6)" w={["18.5rem", "21.875rem", "19rem", "19rem"]} h="3.25rem" marginBottom="1.5rem" isInvalid={error} {...emailProps} label="Email or Phone" type="email" />

                            <AppInputField variant="floating" btnBox={true} fontSize="1.125rem" paddingX="0.75rem" paddingBottom="0.375rem" paddingTop="1.75rem" btnHight="1.5rem" border="rgba(0,0,0,0.6)" w={["18.5rem", "21.875rem", "19rem", "19rem"]} h="3.25rem" isInvalid={error} placeholder=" "
                                {...passwordProps} {...error ? { border: "1px solid red" } : null} label="Password" isPassword />
                            <Flex marginBottom="0.5rem" align="center" h="3.3rem">
                                <Link
                                    borderRadius="10rem" paddingY="0.2rem" paddingX="0.5rem" fontSize="1rem" fontWeight={[700, 700, 600, 600]} _hover={{ backgroundColor: "#0f85e73d", }} backgroundColor="transparent" color={colors.buttonSecondary}>Forgot password?
                                </Link>
                            </Flex>
                            <Flex w="100%" justifyContent="center" >
                                <AppButton
                                    _hover={{ backgroundColor: "#054585" }} fontSize="1rem" fontWeight={700} text="Sign in" color="white" backgroundColor={colors.buttonSecondary} w={["18.5rem", "21.875rem", "19rem", "19rem"]} h="3.25rem" type="submit"
                                />
                            </Flex>
                        </form>
                    </Flex>
                    <Flex h="7.999rem" flexDir="column">

                        <Flex paddingY="0.5rem" justifyContent="center" align="center">
                            <Center marginTop="0.4rem" marginRight="0.5rem" color="rgb(0 0 0 / 44%)" border="0.063rem" w='7rem'>
                                <Divider orientation='horizontal' />
                            </Center>
                            <Text fontSize="0.875rem" color={colors.linkText} paddingX="1.25rem">or</Text>
                            <Center marginTop="0.4rem" marginRight="0.5rem" color="rgb(0 0 0 / 44%)" border="0.063rem" w='7rem'>
                                <Divider orientation='horizontal' />
                            </Center>
                        </Flex>


                        <Flex w="100%" justifyContent="center">
                            <Flex marginTop="0.3rem" w={["18.5rem", "21.875rem", "19rem", "19rem"]} flexDir="column" gap={3} >
                                {loginOption.map((data) =>

                                    <AppButton imgLeftMarginRight="0" border={`1px solid ${colors.linkText}`} key={data.text} image left _hover={{ backgroundColor: colors.background, color: colors.primaryText }} paddingX="2rem" color={colors.linkText} backgroundColor="white" src={data.icon} fontWeight={600} h="2.625rem" fontSize="1rem" text={data.text} />

                                )}
                            </Flex>
                        </Flex>

                    </Flex>
                </Flex>
                <Text marginTop={["2rem", "0.8rem", "2rem", "2rem"]}> New to LinkedIn?<Link href="/signup" fontWeight={600} color="#0a66c2"> Join now</Link></Text>
            </Flex>
            {!isSmallScreen &&
                <Flex margin="0" w="100%" h="3.125rem" backgroundColor="white">
                    <CopyRight />
                </Flex>
            }

        </Flex>

    )
}