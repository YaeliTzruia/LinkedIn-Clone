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
    Input,
    Button,
} from '@chakra-ui/react'
import { Fragment, useState } from "react"
import { Formik } from "formik"
import save from "../../../../assets/save.png"
import { colors } from '../../../../themes/colors'
import { EditUserSchema } from "../../../../schema/EditUserSchema"
import frame from "../../../../assets/svg/profile/frames-white.svg"
import camera from "../../../../assets/svg/profile/camera-white.svg"
import bin from "../../../../assets/svg/profile/bin-white.svg"
import edit from "../../../../assets/svg/profile/edit-pen-white.svg"
import useAuth from '../../../../hooks/useAuth'

// import useAuth from "../../../../../hooks/useAuth"






export default function EditProfileImageModal({ getUserDetails, userInformation, profileImg, isOpen, onClose }) {

    const { updateUserInformation } = useAuth()
    const [image, setImage] = useState()

    const buttons = [
        // { src: edit, text: "Edit"  },
        { src: camera, text: "Add photo" },
        { src: frame, text: "Frames" }
    ]

    const handleSubmit = async (values) => {
        await updateUserInformation(values)
        console.log(values, "values in image")
        // await getUserDetails()
        // onClose()
        console.log(userInformation.profileImg, "user image")
        // setImage('')


    };




    // const { updateUserInformation } = useAuth()
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent borderRadius="2%" minH="29.813rem" marginTop="6rem" minW="46.5rem" bgColor="#1D2226" >
                <ModalHeader color="white">Profile photo</ModalHeader>
                <ModalCloseButton size='lg' color="white" />
                <Fragment>
                    <Formik
                        validationSchema={EditUserSchema}
                        initialValues={userInformation}
                        onSubmit={handleSubmit}
                    >
                        {(values) => {
                            return (
                                <>
                                    {/* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */}
                                    <ModalBody >
                                        <Flex align="center" justifyContent="center">
                                            <Image objectFit="cover" borderRadius="50%" w="17.5rem" h="17.5rem" src={image ? URL.createObjectURL(image) : profileImg} />
                                        </Flex>
                                    </ModalBody>
                                    <Divider opacity="0.2" color="#8080801f" w="100%" />

                                    <ModalFooter paddingY="0" paddingX="0" justifyContent="flex-start">
                                        <Flex marginX="2rem" w="100%" justifyContent="space-between" color="white">
                                            <Flex gap="2rem">

                                                <Flex paddingX="0.5rem" borderRadius="2.5" h="4.8rem" cursor="pointer" _hover={{ bgColor: "#8080807a" }} justifyContent="center" align="center" flexDir="column">
                                                    <Image onClick={() => document.getElementById("newUserImage").click()} h="1.5rem" w="1.5rem" alt="edit" src={edit} />
                                                    <Input style={{ display: "none" }}
                                                        onChange={(e) => {
                                                            setImage(window.URL.createObjectURL(e.target.files[0]))
                                                            values.setFieldValue("profileImg", image)
                                                            // reader.onloadend = () => {
                                                            //     values.setFieldValue("profileImg", reader.result)
                                                            // };
                                                        }
                                                        }
                                                        type="file" id="newUserImage" />
                                                    <Text fontSize="1rem">Edit</Text>
                                                </Flex>
                                                {buttons.map((data) => (
                                                    <Flex paddingX="0.5rem" borderRadius="2.5" h="4.8rem" cursor="pointer" _hover={{ bgColor: "#8080807a" }} justifyContent="center" align="center" flexDir="column" key={data.text}>
                                                        <Image h="1.5rem" w="1.5rem" alt={data.text} src={data.src} />
                                                        <Text fontSize="1rem"> {data.text}</Text>
                                                    </Flex>
                                                ))}

                                            </Flex>


                                            <Flex gap={2}>

                                                {image &&
                                                    <>    <Button onClick={() => handleSubmit(values.values)} style={{ display: "none" }} id="saveProfileImg" />
                                                        <Flex onClick={() => document.getElementById("saveProfileImg").click()} paddingX="0.5rem" borderRadius="2.5" h="4.8rem" cursor="pointer" _hover={{ bgColor: "#8080807a" }} justifyContent="center" align="center" flexDir="column">

                                                            <Image borderRadius="50%" h="1.5rem" w="1.5rem" alt="delete" src={save} />
                                                            <Text fontSize="1rem">Save</Text>

                                                        </Flex>
                                                    </>

                                                }


                                                <Flex paddingX="0.5rem" borderRadius="2.5" h="4.8rem" cursor="pointer" _hover={{ bgColor: "#8080807a" }} justifyContent="center" align="center" flexDir="column">


                                                    <Image h="1.5rem" w="1.5rem" alt="delete" src={bin} />
                                                    <Text fontSize="1rem">Delete</Text>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </ModalFooter>
                                </>
                            )
                        }}
                    </Formik>
                </Fragment>
            </ModalContent >
        </Modal >
    )

}