import { Center, Divider, Flex, FormControl, Heading, Image, Link, Text } from "@chakra-ui/react";
import logo from "../../../assets/svg/linkedin.svg"
import google from "../../../assets/google.png"
import AppButton from "../../../components/AppButton";
import { colors } from "../../../themes/colors";
import useSignup from "../../../hooks/useAuth";
import AppInputField from "../../../components/AppInputField";
import useFormikData from "../../../hooks/useFormik";
export default function Phone() {

    const { signupFormik } = useFormikData()

    const language = [
        { language: "English" },
        { language: "Portuguese" },
        { language: "French" },
        { language: "简体中文" },
        { language: "Plus" },
    ]
    let lastElement = language[language.length - 1]

    return (
        <Flex flexDir=" column" justifyContent="center" w="100%" backgroundColor="white">
            <Flex flexDir=" column" alignItems="center" w="100%" >
                < Flex paddingBottom="1rem" paddingLeft="1.5rem" paddingTop="1.7rem" w="100%" >
                    <Image w="5.3rem" h="1.35rem" src={logo} alt="LinkedIn logo name" />
                </Flex >

                <Heading fontWeight={600} padding="2rem 1rem 1.5rem" fontSize="1.5rem">Join LinkedIn now — it's free!</Heading>
                <Flex justifyContent="space-between" flexDir="column" paddingX="1.5rem" w="100%" backgroundColor="white">
                    <form onSubmit={signupFormik.handleSubmit}>


                        <AppInputField isInvalid={signupFormik.errors.email &&
                            signupFormik.touched.email} border="rgba(0,0,0,0.6)" w={["19.5rem", "22.875rem"]} h="2rem" name="email" onChange={signupFormik.handleChange} value={signupFormik.values.email} label="E-mail" type="email" />

                        {
                            signupFormik.errors.email && signupFormik.touched.email ?
                                <Text fontSize="0.875rem" color={colors.errorRed}>{signupFormik.errors.email}</Text>
                                : null
                        }


                        <AppInputField labelMarginTop="1rem" isInvalid={signupFormik.errors.password &&
                            signupFormik.touched.password} btnHight="2rem" border="rgba(0,0,0,0.6)" w={["19.5rem", "22.875rem"]} h="2rem" name="password" onChange={signupFormik.handleChange} value={signupFormik.values.password} label="Password (6 or more characters)" isPassword btnBox={false} />
                        {
                            signupFormik.errors.password && signupFormik.touched.password ?
                                <Text fontSize="0.875rem" color={colors.errorRed}>{signupFormik.errors.password}</Text>
                                : null
                        }


                        <AppButton marginTop="1.5rem" _hover={{ backgroundColor: "#054585" }} fontSize="1rem" fontWeight={800} text="Continue" color="white" backgroundColor={colors.buttonSecondary} w={["19.5rem", "22.875rem"]} h="3rem" type="submit" />
                    </form>
                    <Flex marginLeft={["0.1rem", "0.5rem"]} align="center" justifyContent="center" h="3.75rem" w="100%" flexDir="column">

                        <Flex marginTop="1rem" w="100%" justify="center" alignItems="center">
                            <AppButton image left _hover={{ backgroundColor: colors.background, color: colors.primaryText }} paddingX="2rem" color={colors.linkText} border={`1px solid #dadce0`} backgroundColor="white" src={google} fontWeight={400} h="2.5rem" w="22rem" fontSize="1rem" text="Continue with Google" />
                        </Flex>
                    </Flex>
                    <Flex padding="1.5rem 1rem 1rem"
                        // paddingTop="1rem" paddingBottom="1.5rem" 
                        justifyContent="center" align="center">
                        <Text fontSize="0.875rem" >Already on LinkedIn?
                            <Link href="/signin" fontWeight={700} color="#0a66c2"> Sign in</Link>
                        </Text>
                    </Flex>

                </Flex>
                <Flex textAlign="center" paddingTop="1rem" justifyContent="center" w="100%" fontSize="0.875rem">
                    <Text>
                        Looking to create a page for a business?
                        <Link fontWeight={700} color="#0a66c2"> Get help</Link>
                    </Text>
                </Flex>

                <Flex marginTop="0.5rem" align="center" justifyContent="center" w="100%" >
                    {language.map((data, index, arr) => {

                        return (
                            <Flex>
                                <Text color={colors.linkText} fontSize="0.75rem" >
                                    {data.language}
                                </Text>
                                {!arr.length - 1 &&
                                    <Center marginX="0.3rem" color="rgb(0 0 0 / 44%)" border="0.013rem" h='1.2rem'>
                                        <Divider orientation="vertical" />
                                    </Center>
                                }

                            </Flex>
                        )
                    }
                    )}

                </Flex>
            </Flex>
        </Flex>
    )
}



