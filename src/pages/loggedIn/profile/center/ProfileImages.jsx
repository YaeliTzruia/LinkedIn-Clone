import { Flex, Image, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import editblue from "../../../../assets/svg/profile/edit-pen-blue.svg"
import { colors } from "../../../../themes/colors";
import EditImageModal from "../modal/EditImageModal";

export default function ProfileImages({ userInformation, getUserDetails, profileImg, banner }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [imageEditing, setImageEditing] = useState({
        data: null,
        name: ""
    })
    return (
        <Flex>
            <Flex justifyContent="end">
                <Flex cursor="pointer" marginTop="1.2rem" marginRight="1.2rem" align="center" justifyContent="center" backgroundColor={colors.white} borderRadius="50%" zIndex={2} position="absolute" h="2rem" w="2rem" >
                    <Image onClick={() => {
                        setImageEditing({ data: banner, name: "banner" })
                        onOpen()
                    }} w="1rem" h="1rem" src={editblue} />
                </Flex>
                <Image objectFit="cover" position="relative" borderTopRadius="0.5rem" w="48.875rem" h="12.219rem" src={banner} />
            </Flex>
            <Image onClick={() => {
                setImageEditing({ data: profileImg, name: "profileImg" })
                onOpen()
            }} objectFit="cover" cursor="pointer" marginLeft="2rem" marginTop="6rem" position="absolute" borderRadius="50%" border="2px solid white" w="9.5rem" h="9.5rem" src={profileImg} />
            <EditImageModal banner={banner} imageEditing={imageEditing} profileImg={profileImg} getUserDetails={getUserDetails} userInformation={userInformation} isOpen={isOpen} onClose={onClose} />
        </Flex>
    )
}