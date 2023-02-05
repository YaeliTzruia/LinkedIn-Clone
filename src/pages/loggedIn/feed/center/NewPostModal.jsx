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
import { Fragment, useState } from "react"
import { Formik } from "formik"
import globe from "../../../../assets/svg/profile/globe.svg"
import smiley from "../../../../assets/svg/profile/smiley.svg"
import newImg from "../../../../assets/svg/profile/new-post-img.svg"
import playImg from "../../../../assets/svg/profile/play-img.svg"
import bubble from "../../../../assets/svg/profile/talk-bubble.svg"
import file from "../../../../assets/svg/profile/file.svg"
import clock from "../../../../assets/svg/profile/clock.svg"
import dots from "../../../../assets/svg/profile/dots-three.svg"
import { EditUserSchema } from "../../../../schema/EditUserSchema"
import { colors } from '../../../../themes/colors'
import useAuth from '../../../../hooks/useAuth'
import AppButton from '../../../../components/AppButton'
import ArrowDown from "../../../../assets/svg/down-arrow.svg"




export default function NewPostModal({ fullName, getUserDetails, userInformation, isOpen, onClose }) {

    const [isDisabled, setIsDisabled] = useState(true)

    const { updateUserInformation } = useAuth()

    const options = [
        { src: newImg, id: '123', text: "add new image" },
        { src: playImg, id: '213', text: "add new video" },
        { src: file, id: '321', text: "add new file" },
        { src: dots, id: '143', text: "other" }
    ]

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
                <ModalContent minW="34.5rem" marginTop={["6rem", "6rem", "2rem", "6rem"]} h="23.688rem" >
                    <ModalHeader padding="1rem 3rem 1rem 1.5rem" h="3.813rem" fontWeight={500} fontSize="1.25rem">Create a post</ModalHeader>
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
                                                    <Flex _hover={{ bgColor: '#8080803b', border: `2px solid ${colors.linkText}` }} cursor="pointer" borderRadius="28px" fontWeight={700} justifyContent="space-between" align="center" border={`1px solid ${colors.linkText}`} bgColor="white" w="7.157rem" h="1.875rem" paddingY="0.313rem" paddingX="0.75rem" fontSize="0.875rem" leftIcon={globe} rightIcon={ArrowDown}><Image src={globe} />Anyone<Image src={ArrowDown} /></Flex>
                                                </Flex>
                                            </Flex>
                                            <Flex h="7.5rem" paddingLeft="0.5rem">
                                                <Textarea onChange={(e) => {
                                                    if (e.target.value.length >= 1) {
                                                        setIsDisabled(false)
                                                    } else {
                                                        setIsDisabled(true)
                                                    }
                                                }}
                                                    h="6rem" resize="none" fontSize="1rem" color={colors.blackE6} _placeholder={{ color: "rgb(0 0 0 / 76%)" }} _active={{ border: "none", outline: "none" }} _focus={{ border: "none", outline: "none", boxShadow: "none" }} border="none" placeholder='What do you want to talk about?' />
                                            </Flex>

                                            <Flex gap={2} paddingLeft="1rem" paddingTop="1rem" align="center">
                                                <Flex justifyContent="center" w="2.5rem"> <Image src={smiley} /></Flex>
                                                <Text borderRadius="0.4rem" padding="0.375rem 0.5rem" _hover={{ bgColor: "#0a66c230" }} fontWeight={700} fontSize="1rem" color={colors.buttonSecondary}>Add hashtag</Text>
                                            </Flex>
                                        </ModalBody>

                                        <ModalFooter paddingY="0.75rem" paddingX="1rem" justifyContent="space-between" w="100%">

                                            <Flex justifyContent="space-between" w="30%">
                                                {options.map((data) =>
                                                    <Flex key={data.id} cursor="pointer" align="center" borderRadius="50%" _hover={{ bgColor: colors.disableBg }} justifyContent="center" h="2.5rem" w="2.5rem" >
                                                        <Image w="1.5rem" h="1.5rem" src={data.src} alt={data.text} />
                                                    </Flex>
                                                )}
                                            </Flex>
                                            <Divider orientation="vertical" color={colors.border} h="70%" />
                                            <Flex justifyContent="space-between" w="64%">
                                                <Flex align="center">
                                                    <AppButton h="1.875rem" paddingY="0.313rem" paddingX="0.75rem" imgHeight="1rem" imgLeftMarginRight="0" fontSize="0.875rem" variant="ghost" color={colors.mediumGray} text="Anyone" image left src={bubble} alt="talk bubble" />

                                                </Flex>
                                                <Flex align="center" gap={2}>
                                                    <Flex cursor="pointer" align="center" borderRadius="50%" _hover={{ bgColor: colors.disableBg }} justifyContent="center" h="2.5rem" w="2.5rem">
                                                        <Image w="1.5rem" alt="clock" src={clock} />
                                                    </Flex>
                                                    {isDisabled ? (
                                                        <AppButton cursor="not-allowed" type="button" maxH="2rem" maxW="5.75rem" _hover={{ bgColor: colors.disableBg, }} paddingY="0.375rem" paddingX="1rem" fontWeight={600} fontSize="1rem" color={colors.disableText} bgColor={colors.disableBg} text="Post" />
                                                    ) : (
                                                        <AppButton onClick={() => handleSubmit(values.values)} type="button" maxH="2rem" maxW="5.75rem" _hover={{ bgColor: colors.buttonPrimary, border: `2px solid ${colors.buttonPrimary}` }} paddingY="0.375rem" paddingX="1rem" fontWeight={600} fontSize="1rem" color="white" border={`1px solid ${colors.buttonSecondary}`} bgColor={colors.buttonSecondary} text="Post" />
                                                    )}

                                                </Flex>
                                            </Flex>

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



