import { Flex, Image, Text } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import AppInputField from "../../../../../components/AppInputField"
import info from "../../../../../assets/svg/info-icon-gray.svg"
import { EditUserSchema } from "../../../../../schema/EditUserSchema"
import { colors } from "../../../../../themes/colors"

export default function EditUserForm({ userInformation }) {
    console.log(userInformation, "userInformation")
    const data = {
        email: ""
    }


    const handleSubmit = (values) => {
        console.log(values)
    };
    return (

        <Formik
            validationSchema={EditUserSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {(values) => {
                return (
                    <Form>
                        <Flex flexDir="column" paddingTop="1.5rem" w="100%">
                            <Flex paddingBottom="1.5rem">
                                <AppInputField isInvalid={values.errors.email &&
                                    values.touched.email} label="First name*" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="email" type="email" onChange={values.handleChange} value={values.values.email} />
                                {values.errors.email && values.touched.email ?
                                    <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.email}</Text> : null}
                            </Flex>

                            <Flex paddingBottom="1.5rem">
                                <AppInputField isInvalid={values.errors.email &&
                                    values.touched.email} label="Last name*" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="email" type="email" onChange={values.handleChange} value={values.values.email} />
                                {values.errors.email && values.touched.email ?
                                    <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.email}</Text> : null}
                            </Flex>
                            <Flex paddingBottom="1.5rem">

                                <AppInputField isInvalid={values.errors.email &&
                                    values.touched.email} label="Additional name" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="email" type="email" onChange={values.handleChange} value={values.values.email} />
                                {values.errors.email && values.touched.email ?
                                    <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.email}</Text> : null}
                            </Flex>
                        </Flex>
                        <Text paddingBottom="0.5rem" color={colors.mediumGray} fontSize="0.875rem">Name pronunciation</Text>
                        <Flex>
                            <Image paddingRight="0.25rem" alt="info" src={info} />
                            <Text fontSize="0.875rem" color={colors.grayBlue7A}>This can only be added using our mobile app</Text>
                        </Flex>
                    </Form>
                )
            }}
        </Formik>
    )
}