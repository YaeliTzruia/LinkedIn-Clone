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
import { EditUserSchema } from "../../../../schema/EditUserSchema"
import frame from "../../../../assets/svg/profile/frames-white.svg"
import camera from "../../../../assets/svg/profile/camera-white.svg"
import bin from "../../../../assets/svg/profile/bin-white.svg"
import edit from "../../../../assets/svg/profile/edit-pen-white.svg"
import useAuth from '../../../../hooks/useAuth'




export default function EditImageModal({ getUserDetails, profileImg, banner, userInformation, imageEditing, isOpen, onClose }) {

    const { updateUserInformation, updateImage } = useAuth()
    const [image, setImage] = useState()

    const imagedata = imageEditing.data
    const imageText = imageEditing.name

    console.log(imageEditing)
    const buttons = [
        { src: camera, text: "Add photo" },
        { src: frame, text: "Frames" }
    ]

    const handleSubmit = async (values) => {
        console.log(image, "imageeeeeee")
        if (imageText === "banner") {
            const formData = new FormData();
            formData.append("image", image);
            const resp = await updateImage(formData)
            await updateUserInformation({ ...values, headerImg: resp.data })
            await getUserDetails()
            onClose()
            setImage()
        } else {
            const formData = new FormData();
            formData.append("image", image);
            const resp = await updateImage(formData)
            await updateUserInformation({ ...values, profileImg: resp.data })
            await getUserDetails()
            onClose()
            setImage()
        }


    };

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
                                    <ModalBody >
                                        <Flex align="center" justifyContent="center">
                                            {imageText === "banner" ?
                                                (
                                                    <Image padding="0" objectFit="cover" w="100%" h="17.5rem" src={image ? URL.createObjectURL(image) : imagedata} />
                                                )
                                                :
                                                (
                                                    <Image objectFit="cover" borderRadius="50%" w="17.5rem" h="17.5rem" src={image ? URL.createObjectURL(image) : imagedata} />
                                                )}

                                        </Flex>
                                    </ModalBody>
                                    <Divider opacity="0.2" color="#8080801f" w="100%" />

                                    <ModalFooter paddingY="0" paddingX="0" justifyContent="flex-start">
                                        <Flex marginX="2rem" w="100%" justifyContent="space-between" color="white">
                                            <Flex gap="2rem">

                                                <Flex paddingX="0.5rem" borderRadius="2.5" h="4.8rem" cursor="pointer" _hover={{ bgColor: "#8080807a" }} justifyContent="center" align="center" flexDir="column">
                                                    <Image onClick={() => document.getElementById("newUserImage").click()} h="1.5rem" w="1.5rem" alt="edit" src={edit} />
                                                    <Input accept='image/*' style={{ display: "none" }}

                                                        onChange={(e) => {
                                                            console.log(e.target.files[0])
                                                            setImage(e.target.files[0])
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
                                                    <>    <Button onClick={() => handleSubmit(values.values)} style={{ display: "none" }} id="saveImg" />
                                                        <Flex onClick={() => document.getElementById("saveImg").click()} paddingX="0.5rem" borderRadius="2.5" h="4.8rem" cursor="pointer" _hover={{ bgColor: "#8080807a" }} justifyContent="center" align="center" flexDir="column">

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