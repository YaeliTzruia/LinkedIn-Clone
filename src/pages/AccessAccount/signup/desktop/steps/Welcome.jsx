import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import logo from "../../../../../assets/Linkedin-logo-png2.png"
import AppInputField from "../../../../../components/AppInputField";
import AppButton from "../../../../../components/AppButton";
import { colors } from "../../../../../themes/colors";
import useFormikData from "../../../../../hooks/useFormik";


export default function Welcome() {
    const { AddProfileDataFormik } = useFormikData()

    return (

        <Flex flexDir=" column" justifyContent="center" w="100%" backgroundColor={colors.white}>
            <Flex flexDir=" column" alignItems="center" w="100%" h={[null, null, "42rem", "64.85rem"]}>
                < Flex paddingTop="1.5rem" w={["100%", "100%", "70.5rem", "70.5rem"]} >
                    <Image w="8.438rem" h="2.109rem" src={logo} alt="LinkedIn logo name" />
                </Flex >
                <Heading fontWeight={400} paddingY="1.5rem" paddingX="1rem" fontSize="2rem">Make the most of your professional life</Heading>
                <Flex justifyContent="space-between" flexDir="column" borderRadius="0.5rem" padding="1.5rem 1.5rem 0 1.5rem" backgroundColor="white">

                    <form onSubmit={AddProfileDataFormik.handleSubmit}>

                        <AppInputField name="country" isInvalid={AddProfileDataFormik.errors.country &&
                            AddProfileDataFormik.touched.country} label="Country/Region" border="rgba(0,0,0,0.6)" w="25.5rem" h="2rem" type="text" onChange={AddProfileDataFormik.handleChange} value={AddProfileDataFormik.values.country} />
                        {AddProfileDataFormik.errors.country && AddProfileDataFormik.touched.country ? <Text fontSize="0.875rem" color={colors.errorRed}>{AddProfileDataFormik.errors.country}</Text> : null}



                        <AppInputField name="city" labelMarginTop="1rem" isInvalid={AddProfileDataFormik.errors.city &&
                            AddProfileDataFormik.touched.city} btnHight="2rem" border="rgba(0,0,0,0.6)" w="25.5rem" h="2rem"
                            onChange={AddProfileDataFormik.handleChange} value={AddProfileDataFormik.values.city}
                            label="City/District" btnBox={false} />

                        {AddProfileDataFormik.errors.city && AddProfileDataFormik.touched.city ? <Text fontSize="0.875rem" color={colors.errorRed}>{AddProfileDataFormik.errors.city}</Text> : null}




                        <AppButton isDisabled={AddProfileDataFormik?.values?.city?.length < 1 || AddProfileDataFormik?.values?.country?.length < 1} marginY="1.8rem" _hover={{ backgroundColor: "#054585" }} fontSize="1rem" fontWeight={700} text="Continue" color="white" backgroundColor={colors.buttonSecondary} w="25.5rem" h="3rem" type="submit" />
                    </form>



                </Flex>


            </Flex>
        </Flex >
    )
}