import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";

import logo from "../../../../../assets/Linkedin-logo-png2.png"
import AppInputField from "../../../../../components/AppInputField";
import AppButton from "../../../../../components/AppButton";
import { colors } from "../../../../../themes/colors";
import { SignupSchema } from "../../../../../schema/SignupSchema"

export default function SecondStep({ handleNextStep, data }) {

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
                                <Flex justifyContent="space-between" flexDir="column" borderRadius="0.5rem" padding="1.5rem 1.5rem 0 1.5rem" w={["100%", "100%", "25rem", "25rem"]} backgroundColor="white">

                                    <AppInputField name="firstName" isInvalid={values.errors.firstName &&
                                        values.touched.firstName} label="First name" border="rgba(0,0,0,0.6)" w="22rem" h="2rem" type="text" onChange={values.handleChange} value={values.values.firstName} />
                                    {values.errors.firstName && values.touched.firstName ? <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.firstName}</Text> : null}



                                    <AppInputField name="lastName" labelMarginTop="1rem" isInvalid={values.errors.lastName &&
                                        values.touched.lastName} btnHight="2rem" border="rgba(0,0,0,0.6)" w="22rem" h="2rem"
                                        onChange={values.handleChange} value={values.values.lastName}
                                        label="Last name" btnBox={false} />

                                    {values.errors.lastName && values.touched.lastName ? <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.lastName}</Text> : null}




                                    <AppButton marginY="1.5rem" _hover={{ backgroundColor: "#054585" }} fontSize="1rem" fontWeight={700} text="Continue" color="white" backgroundColor={colors.buttonSecondary} w="22rem" h="3rem" type="submit" />


                                </Flex>


                            </Flex>

                        </Flex>
                    </Form>
                )
            }}
        </Formik>)

}