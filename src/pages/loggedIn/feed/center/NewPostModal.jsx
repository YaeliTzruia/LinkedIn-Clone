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
    Image,
    Textarea,
} from '@chakra-ui/react'
import { Fragment } from "react"
import { Formik } from "formik"

// import AppButton from '../../../../../components/AppButton'
import { EditUserSchema } from "../../../../schema/EditUserSchema"
import { colors } from '../../../../themes/colors'
import useAuth from '../../../../hooks/useAuth'
import AppButton from '../../../../components/AppButton'
import ArrowDown from "../../../../assets/svg/down-arrow.svg"

// import EditUserForm from './EditUserForm'


export default function NewPostModal({ fullName, getUserDetails, userInformation, isOpen, onClose }) {


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
                <ModalContent minW="34.5rem" marginTop="6rem" h="23.688rem" >
                    <ModalHeader padding="1rem 3rem 1rem 1.5rem" h="3.813rem" fontWeight={400} fontSize="1.25rem">Create a post</ModalHeader>
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
                                        <ModalBody padding="0" w="34.5rem" overflow="scroll" maxH="100vh" color={colors.linkText} >
                                            <Flex align="center" paddingX="1.5rem" paddingY="0.75rem">
                                                <Image w="3rem" h="3rem" borderRadius="50%" src={userInformation.profileImg} alt='profile image' />
                                                <Flex paddingLeft="0.5rem" marginLeft="0.25rem" flexDir="column">
                                                    <Text color={colors.blackE6} fontWeight={600} >{fullName}</Text>
                                                    <AppButton border={`1px solid ${colors.linkText}`} bgColor="white" w="7.157rem" h="1.875rem" paddingY="0.313rem" paddingX="0.75rem" fontSize="0.875rem" iconWidth="1rem" iconHeight="1rem" text="Anyone" image right src={ArrowDown} />
                                                </Flex>
                                            </Flex>
                                            <Flex paddingLeft="0.5rem">
                                                <Textarea resize="none" fontSize="1rem" color={colors.blackE6} _placeholder={{ color: "rgb(0 0 0 / 76%)" }} _active={{ border: "none", outline: "none" }} _focus={{ border: "none", outline: "none", boxShadow: "none" }} border="none" placeholder='What do you want to talk about?' />
                                            </Flex>


                                        </ModalBody>

                                        <Divider color={colors.border} w="100%" />
                                        <ModalFooter>
                                            {/* <AppButton onClick={() => handleSubmit(values.values)} type="button" maxH="2rem" maxW="5.75rem" _hover={{ bgColor: colors.buttonPrimary, border: `2px solid ${colors.buttonPrimary}` }} paddingY="0.375rem" paddingX="1rem" fontWeight={600} fontSize="1rem" color="white" border={`1px solid ${colors.buttonSecondary}`} bgColor={colors.buttonSecondary} text="Save" /> */}

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



