import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Divider,
    Flex,
} from '@chakra-ui/react'
import { Fragment } from "react"
import { Formik } from "formik"

import AppButton from '../../../../../components/AppButton'
import { EditUserSchema } from "../../../../../schema/EditUserSchema"
import { colors } from '../../../../../themes/colors'
import useAuth from "../../../../../hooks/useAuth"

import EditUserForm from './EditUserForm'

export default function EditInfoModal({ getUserDetails, userInformation, isOpen, onClose }) {



    const { updateUserInformation } = useAuth()

    console.log(userInformation, "userInformation", "usermodal")


    const handleSubmit = async (values) => {
        await updateUserInformation(values)
        console.log(values)
        await getUserDetails()
        onClose()


    };

    return (
        <>


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bgColor="rgba(0,0,0,.75)" />
                <ModalContent minW="46.5rem" marginTop="6rem" h="58rem" >
                    <ModalHeader padding="1rem 3rem 1rem 1.5rem" h="3.813rem" fontWeight={400} fontSize="1.25rem">Edit intro</ModalHeader>
                    <Flex justifyContent="center">
                        <Divider color={colors.border} />
                    </Flex>
                    <ModalCloseButton />
                    <Fragment>
                        <Formik
                            validationSchema={EditUserSchema}
                            initialValues={userInformation}
                            onSubmit={handleSubmit}
                        >
                            {(values) => {
                                return (
                                    <>
                                        <ModalBody w="46.5rem" overflow="scroll" maxH="100vh" color={colors.linkText} >

                                            <Text fontSize="0.75rem">* Indicates required</Text>
                                            <EditUserForm values={values} info={userInformation} />

                                        </ModalBody>

                                        <Divider color={colors.border} w="100%" />
                                        <ModalFooter>
                                            <AppButton onClick={() => handleSubmit(values.values)} type="button" maxH="2rem" maxW="5.75rem" _hover={{ bgColor: colors.buttonPrimary, border: `2px solid ${colors.buttonPrimary}` }} paddingY="0.375rem" paddingX="1rem" fontWeight={600} fontSize="1rem" color="white" border={`1px solid ${colors.buttonSecondary}`} bgColor={colors.buttonSecondary} text="Save" />

                                        </ModalFooter>

                                    </>
                                )
                            }}
                        </Formik>
                    </Fragment>

                </ModalContent>
            </Modal>
        </>
    )
}