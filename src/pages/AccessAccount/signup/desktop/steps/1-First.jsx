import { Flex, Heading, Image, Text, Link, Center, Divider } from "@chakra-ui/react";
import { Form, Formik } from "formik";

import logo from "../../../../../assets/Linkedin-logo-png2.png"
import google from "../../../../../assets/google.png"
import AppInputField from "../../../../../components/AppInputField";
import AppButton from "../../../../../components/AppButton";
import CopyRight from "../../../../../misc/footer/CopyRight";
import { colors } from "../../../../../themes/colors";
import { SignupSchema } from "../../../../../schema/SignupSchema"



export default function FirstStep({ handleNextStep, data }) {


    const handleSubmit = (values) => {
        handleNextStep(values);
    };
    return (
        <Formik
            validationSchema={SignupSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(values) => {
                return (
                    <Form>
                        <Flex flexDir=" column" justifyContent="center" w="100%" backgroundColor={colors.background}>
                            <Flex flexDir=" column" alignItems="center" w="100%" h={[null, null, "42rem", "64.85rem"]}>
                                < Flex paddingTop="1.5rem" w={["100%", "100%", "70.5rem", "70.5rem"]} >
                                    <Image w="8.438rem" h="2.109rem" src={logo} alt="LinkedIn logo name" />
                                </Flex >
                                <Heading fontWeight={400} paddingY="1.5rem" paddingX="1rem" fontSize="2rem">Make the most of your professional life</Heading>
                                <Flex justifyContent="space-between" flexDir="column" borderRadius="0.5rem" padding="1.5rem" w={["100%", "100%", "25rem", "25rem"]} backgroundColor="white">



                                    <AppInputField isInvalid={values.errors.email &&
                                        values.touched.email} label="E-mail" border="rgba(0,0,0,0.6)" w="22rem" h="2rem" name="email" type="email" onChange={values.handleChange} value={values.values.email} />
                                    {values.errors.email && values.touched.email ? <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.email}</Text> : null}




                                    <AppInputField labelMarginTop="1rem" isInvalid={values.errors.password &&
                                        values.touched.password} btnHight="2rem" border="rgba(0,0,0,0.6)" w="22rem" h="2rem" name="password"
                                        onChange={values.handleChange} value={values.values.password}
                                        label="Password (6 or more characters)" isPassword btnBox={false} />
                                    {/* <ErrorMessage name="password" /> */}
                                    {values.errors.password && values.touched.password ? <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.password}</Text> : null}


                                    <Flex marginY="0.8rem" justifyContent="center" textAlign="center">
                                        <Text color="#00000099" fontSize="0.75rem">By clicking Agree & Join, you agree to the LinkedIn
                                            <Link fontWeight={600} color={colors.buttonSecondary}> User Agreement</Link> ,
                                            <Link fontWeight={600} color={colors.buttonSecondary}>Privacy Policy</Link> , and
                                            <Link fontWeight={600} color={colors.buttonSecondary}>Cookie Policy</Link>.
                                        </Text>
                                    </Flex>

                                    <AppButton _hover={{ backgroundColor: "#054585" }} fontSize="1rem" fontWeight={700} text="Agree & Join" color="white" backgroundColor={colors.buttonSecondary} w="22rem" h="3rem" type="submit" />

                                    <Flex justifyContent="space-around" h="6.5rem" w="22rem" flexDir="column">
                                        <Flex paddingY="1rem" justifyContent="center" align="center">
                                            <Center marginTop="0.4rem" marginRight="0.5rem" color="rgb(0 0 0 / 44%)" border="0.063rem" w='8rem'>
                                                <Divider orientation='horizontal' />
                                            </Center>
                                            <Text paddingX="1.25rem">or</Text>
                                            <Center marginTop="0.4rem" marginRight="0.5rem" color="rgb(0 0 0 / 44%)" border="0.063rem" w='8rem'>
                                                <Divider orientation='horizontal' />
                                            </Center>
                                        </Flex>
                                        <Flex align="center">
                                            <AppButton image left _hover={{ backgroundColor: colors.background, color: colors.primaryText }} paddingX="2rem" color={colors.linkText} border={`1px solid #dadce0`} backgroundColor="white" src={google} fontWeight={400} h="2.5rem" w="100%" fontSize="1rem" text="Continue with Google" />
                                        </Flex>
                                    </Flex>
                                    <Flex paddingTop="0.8rem"
                                        justifyContent="center" align="center">
                                        <Text fontSize="1rem" >Already on LinkedIn?
                                            <Link href="/signin" fontWeight={600} color={colors.buttonSecondary}> Sign in</Link>
                                        </Text>
                                    </Flex>
                                </Flex>

                                <Flex paddingTop="1rem" fontSize="0.875rem">
                                    <Text>Looking to create a page for a business? <Link fontWeight={600} color="#0a66c2">Get help</Link></Text>
                                </Flex>
                            </Flex>
                            <Flex margin="0" w="100%" h="3.125rem" backgroundColor="white">
                                <CopyRight />
                            </Flex>
                        </Flex>
                    </Form>
                )
            }}
        </Formik>
    )
}