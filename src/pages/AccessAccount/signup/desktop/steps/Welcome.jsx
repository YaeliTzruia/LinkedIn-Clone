import { Flex, Heading, Image, Select, Text } from "@chakra-ui/react";

import logo from "../../../../../assets/Linkedin-logo-png2.png"
import AppButton from "../../../../../components/AppButton";
import { colors } from "../../../../../themes/colors";
import countries from "../../../../../Json-data/Country-city.json/Country-State-Data.json"
import { Form, Formik } from "formik";
import { SignupSchema } from "../../../../../schema/SignupSchema";
import AppSelectField from "../../../../../components/AppSelectField";
import { useEffect, useState } from "react";


export default function Welcome({ handleNextStep, data }) {

    const [city, setCity] = useState([])
    const [cityId, setCityId] = useState('')
    // const [selectedCity, setSelectedCity] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')
    const [countryId, setCountryId] = useState("")


    const handleSubmit = (values) => {
        handleNextStep(values, true);
    };

    const handleCountryChange = (e) => {
        const getCountry = e.target.value
        const getCountryId = countries.find(country => country.country_name === getCountry).country_id
        console.log(getCountryId, "getCountryId")
        const getStates = countries.find(country => country.country_id === getCountryId).states;
        console.log(getStates, "getStates")
        setCity(getStates)
        console.log(city, "city")

    }

    return (
        <Formik
            validationSchema={SignupSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(values) => {
                return (
                    <Form>
                        <Flex flexDir=" column" justifyContent="center" w="100%" backgroundColor={colors.white}>
                            <Flex flexDir=" column" alignItems="center" w="100%" h={[null, null, "42rem", "64.85rem"]}>
                                < Flex paddingTop="1.5rem" w={["100%", "100%", "70.5rem", "70.5rem"]} >
                                    <Image w="8.438rem" h="2.109rem" src={logo} alt="LinkedIn logo name" />
                                </Flex >
                                <Flex paddingY="1.5rem" textAlign="center" w="32%" alignItems="center" flexDir="column">
                                    <Heading fontWeight={600} paddingX="1rem" fontSize="1.8rem">Welcome, {data.firstName}!  </Heading>
                                    <Heading fontWeight={400} paddingTop="0.8rem" paddingX="1rem" fontSize="1rem" >Let's start your profile, connect to people you know, and engage with them on topics you care about.</Heading>
                                </Flex>
                                <Flex justifyContent="space-between" flexDir="column" borderRadius="0.5rem" padding="1.5rem 1.5rem 0 1.5rem" backgroundColor="white">

                                    <AppSelectField mapCountry countries={countries} name="country" isInvalid={values.errors.country &&
                                        values.touched.country} label="Country/Region" border="rgba(0,0,0,0.6)" w="25.5rem" h="2rem" type="select"
                                        onChange={(e) => {
                                            e.preventDefault()
                                            handleCountryChange(e)
                                            values.setFieldValue('country', e.target.value)
                                        }} value={values.values.country} />

                                    {values.errors.country && values.touched.country ? <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.country}</Text> : null}



                                    <AppSelectField values={values} states={city} name="city" labelMarginTop="1rem" isInvalid={values.errors.city &&
                                        values.touched.city} border="rgba(0,0,0,0.6)" w="25.5rem" h="2rem"
                                        onChange={(e) => {
                                            e.preventDefault()
                                            values.setFieldValue('city', e.target.value)
                                        }}

                                        value={values.values.city}
                                        label="City/District" />

                                    {values.errors.city && values.touched.city ? <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.city}</Text> : null}

                                    <AppButton
                                        // isDisabled={values?.values?.city === "" || values?.values?.country?.length < 1} 
                                        marginY="1.8rem" _hover={{ backgroundColor: "#054585" }} fontSize="1rem" fontWeight={700} text="Continue" color="white" backgroundColor={colors.buttonSecondary} w="25.5rem" h="3rem" type="submit" />



                                </Flex>


                            </Flex>
                        </Flex >
                    </Form>
                )
            }}
        </Formik>)
}