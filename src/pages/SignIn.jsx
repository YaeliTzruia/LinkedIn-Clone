import { Divider, Flex, Image, Center, Text, Link, Heading } from "@chakra-ui/react";
import logo from "../assets/Linkedin-logo-png2.png"
import AppButton from "../components/AppButton";
import AppInputField from "../components/AppInputField";
import useSignIn from "../hooks/useSignIn";
import CopyRight from "../misc/footer/CopyRight";
import google from "../assets/google.png"
import apple from "../assets/apple-logo.png"
import { colors } from "../themes/colors";
export default function SignIn() {

    const { loginUser, passwordProps, emailProps, error } = useSignIn()

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
            < Flex marginTop="2rem" marginLeft="3.5rem" w={["100%", "100%", "70.5rem", "70.5rem"]} >
                <Image w="7rem" h="1.75rem" src={logo} alt="LinkedIn logo name" />
            </Flex >
            <Flex justifyContent="center" flexDir=" column" alignItems="center" w="100%" h="60.5rem">
                <Flex boxShadow="0 4px 12px rgb(0 0 0 / 15%)" flexDir="column" borderRadius="0.5rem" padding="1.5rem" w="22rem" h="31.999rem" backgroundColor="white">
                    <Flex marginBottom="1rem" flexDir="column">
                        <Heading fontWeight={600} fontSize="2rem">Sign in</Heading>
                        <Text fontSize="0.875rem">Stay updated on your professional world</Text>
                    </Flex>
                    <Flex justifyContent="space-between" flexDir="column">
                        <form onSubmit={loginUser}>


                            <AppInputField color="black" border="rgba(0,0,0,0.6)" w="19rem" h="3.25rem" marginBottom="1rem" isInvalid={error} {...emailProps} placeholder="Email or Phone" type="email" />

                            <AppInputField btnHight="3.125rem" border="rgba(0,0,0,0.6)" w="19rem" h="3.25rem" isInvalid={error}
                                {...passwordProps} {...error ? { border: "1px solid red" } : null} placeholder="Password" isPassword />

                            <AppButton maxH="2rem" paddingY="0" paddingX="0" fontSize="1rem" fontWeight={600} backgroundColor="transparent" color={colors.buttonSecondary} text="Forgot password?" />

                            <AppButton paddingTop="1rem" padding="0" _hover={{ backgroundColor: "#054585" }} fontSize="1rem" fontWeight={700} text="Sign in" color="white" backgroundColor={colors.buttonSecondary} w="19rem" h="3.25rem" type="submit" />
                        </form>
                    </Flex>
                    <Flex h="7.999rem" flexDir="column">

                        <Flex paddingY="1rem" justifyContent="center" align="center">
                            <Center marginTop="0.4rem" marginRight="0.5rem" color="rgb(0 0 0 / 44%)" border="0.063rem" w='7rem'>
                                <Divider orientation='horizontal' />
                            </Center>
                            <Text paddingX="1.25rem">or</Text>
                            <Center marginTop="0.4rem" marginRight="0.5rem" color="rgb(0 0 0 / 44%)" border="0.063rem" w='7rem'>
                                <Divider orientation='horizontal' />
                            </Center>
                        </Flex>

                        <Flex align="center">
                        </Flex>

                        <Flex flexDir="column" gap={3} >
                            {loginOption.map((data) =>

                                <AppButton imgLeftMarginRight="0" border={`1px solid ${colors.linkText}`} key={data.text} image left _hover={{ backgroundColor: colors.background, color: colors.primaryText }} paddingX="2rem" color={colors.linkText} backgroundColor="white" src={data.icon} fontWeight={600} h="2.625rem" fontSize="1rem" text={data.text} />

                            )}
                        </Flex>


                    </Flex>
                </Flex>
                <Text marginTop="2rem"> New to LinkedIn?<Link fontWeight={600} color="#0a66c2"> Join now</Link></Text>
            </Flex>
            <CopyRight />
        </Flex>

    )
}