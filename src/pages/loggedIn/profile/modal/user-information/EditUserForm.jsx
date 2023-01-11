import { Checkbox, Flex, Heading, Image, Input, Text } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import AppInputField from "../../../../../components/AppInputField"
import AppButton from "../../../../../components/AppButton"
import infoImg from "../../../../../assets/svg/info-icon-gray.svg"

import { colors } from "../../../../../themes/colors"
import plus from "../../../../../assets/svg/work-menu/plus-blue.svg"



export default function EditUserForm({ values }) {





    return (


        <Form>
            <Flex flexDir="column" paddingTop="1.5rem" w="100%">
                <Flex paddingBottom="1.5rem">

                    <AppInputField color={colors.primaryText} isInvalid={values.errors.firstName &&
                        values.touched.firstName} label="First name*" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="firstName" onChange={values.handleChange} value={values.values.firstName} />
                    {values.errors.firstName && values.touched.firstName ?
                        <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.firstName}</Text> : null}
                </Flex>

                <Flex paddingBottom="1.5rem">
                    <AppInputField color={colors.primaryText} isInvalid={values.errors.lastName &&
                        values.touched.lastName} label="Last name*" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="lastName" onChange={values.handleChange} value={values.values.lastName} />
                    {values.errors.lastName && values.touched.lastName ?
                        <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.lastName}</Text> : null}
                </Flex>
                <Flex paddingBottom="1.5rem">

                    <AppInputField color={colors.primaryText} isInvalid={values.errors.middleName &&
                        values.touched.middleName} label="Additional name" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="middleName" onChange={values.handleChange} value={values.values.middleName} />
                    {values.errors.middleName && values.touched.middleName ?
                        <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.middleName}</Text> : null}
                </Flex>
            </Flex>
            <Text paddingBottom="0.5rem" color={colors.mediumGray} fontSize="0.875rem">Name pronunciation</Text>
            <Flex>
                <Image paddingRight="0.25rem" alt="info" src={infoImg} />
                <Text fontSize="0.875rem" color={colors.grayBlue7A}>This can only be added using our mobile app</Text>
            </Flex>
            <Flex paddingTop="1rem">
                <AppInputField color={colors.primaryText} isInvalid={values.errors.headline &&
                    values.touched.headline} label="Headline*" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="headline" onChange={values.handleChange} value={values.values.headline} />
                {values.errors.headline && values.touched.headline ?
                    <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.headline}</Text> : null}
            </Flex>

            <Flex paddingTop="2rem">
                <Heading fontWeight={400} color={colors.blackE6} as="h4" fontSize="1.25rem ">
                    Current position
                </Heading>
            </Flex>
            <Flex paddingBottom="1.5rem">
                <AppButton h="2rem" borderRadius="5%" _hover={{ bgColor: colors.blueHover, }} marginTop="1rem" imgLeftMarginRight="0" w="10.271rem" paddingX="0.25rem" paddingY="0" color={colors.buttonSecondary} imgHeight="1rem" image left src={plus} variant='ghost' text="Add new position" />
            </Flex>

            <AppInputField color={colors.primaryText} isInvalid={values.errors.industry &&
                values.touched.industry} label="Industry*" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="industry" onChange={values.handleChange} value={values.values.industry} />
            {values.errors.industry && values.touched.industry ?
                <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.industry}</Text> : null}

            <Flex gap="1%" marginTop="0.5rem" align="center">
                <Text>Learn more about </Text> <Text _hover={{ cursor: "pointer", textDecor: "underline" }} fontWeight={600} textDecor="none" colorScheme='teal.500' color={colors.buttonSecondary}> industry options</Text>
            </Flex>

            <Flex paddingTop="2rem">
                <Heading fontWeight={400} color={colors.blackE6} as="h4" fontSize="1.25rem ">
                    Education
                </Heading>
            </Flex>
            <AppInputField color={colors.primaryText} isInvalid={values.errors.education &&
                values.touched.education} label="Education*" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="education" onChange={values.handleChange} value={values.values.education} />
            {values.errors.education && values.touched.education ?
                <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.education}</Text> : null}
            <Flex paddingBottom="1.5rem">
                <AppButton h="2rem" borderRadius="5%" _hover={{ bgColor: colors.blueHover, }} marginTop="1rem" imgLeftMarginRight="0" w="10.271rem" paddingX="0.25rem" paddingY="0" color={colors.buttonSecondary} imgHeight="1rem" image left src={plus} variant='ghost' text="Add new education" />
            </Flex>



            <Flex paddingTop="2rem">
                <Heading fontWeight={400} color={colors.blackE6} as="h4" fontSize="1.25rem ">
                    Location
                </Heading>
            </Flex>
            <AppInputField color={colors.primaryText} isInvalid={values.errors.country &&
                values.touched.country} label="Country/Region*" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="country" onChange={values.handleChange} value={values.values.country} />
            {values.errors.country && values.touched.country ?
                <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.country}</Text> : null}

            <Flex paddingTop="2rem">
                <AppInputField color={colors.primaryText} isInvalid={values.errors.city &&
                    values.touched.city} label="City*" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="city" onChange={values.handleChange} value={values.values.city} />
                {values.errors.city && values.touched.city ?
                    <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.city}</Text> : null}
            </Flex>

            <Flex paddingTop="2rem">
                <Heading fontWeight={400} color={colors.blackE6} as="h4" fontSize="1.25rem ">
                    Contact info
                </Heading>
            </Flex>
            <Text fontSize="0.875rem" fontWeight={600} marginTop="0.25rem" marginBottom="0.5rem">
                Add or edit your profile URL, email, and more
            </Text>
            <AppButton h="2rem" borderRadius="5%" _hover={{ bgColor: colors.blueHover, textDecor: 'underline' }} marginTop="1rem" paddingX="0.25rem" paddingY="0" padding="0.375ren 0.5rem" color={colors.buttonSecondary} variant='ghost' text="Edit contact info" />
            <Flex paddingTop="2rem">
                <Heading fontWeight={400} color={colors.blackE6} as="h4" fontSize="1.25rem ">
                    Website
                </Heading>

            </Flex>
            <Text fontSize="0.875rem" fontWeight={600} marginTop="0.25rem" marginBottom="0.5rem">Add a link that will appear at the top of your profile</Text>

            <AppInputField color={colors.primaryText} isInvalid={values.errors.link &&
                values.touched.link} label="Link" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="link" onChange={values.handleChange} value={values.values.link} />
            {values.errors.link && values.touched.link ?
                <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.link}</Text> : null}

            <Flex paddingTop="2rem">
                <AppInputField color={colors.primaryText} isInvalid={values.errors.linkText &&
                    values.touched.linkText} label="Link text" border="rgba(0,0,0,0.6)" w="100%" h="2rem" name="linkText" onChange={values.handleChange} value={values.values.linkText} />
                {values.errors.linkText && values.touched.linkText ?
                    <Text fontSize="0.875rem" color={colors.errorRed}>{values.errors.linkText}</Text> : null}

            </Flex>
            <Flex paddingX="0.15rem" justifyContent="space-between" fontSize="0.875rem" align="center"><Text>Customize how your link will appear (optional).</Text> <Text>0/30</Text></Flex>

            <AppButton type="submit" maxH="2rem" maxW="5.75rem" _hover={{ bgColor: colors.buttonPrimary, border: `2px solid ${colors.buttonPrimary}` }} paddingY="0.375rem" paddingX="1rem" fontWeight={600} fontSize="1rem" color="white" border={`1px solid ${colors.buttonSecondary}`} bgColor={colors.buttonSecondary} text="Save" />
        </Form>

    )
}