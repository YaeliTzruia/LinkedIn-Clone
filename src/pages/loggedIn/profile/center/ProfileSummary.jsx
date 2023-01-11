import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { userContext } from "../../../../context/userContext";
import { colors } from "../../../../themes/colors";
import edit from "../../../../assets/svg/profile/edit-pen.svg"
import editblue from "../../../../assets/svg/profile/edit-pen-blue.svg"
import AppButton from "../../../../components/AppButton";
import EditInfoModal from "../modal/user-information/EditInfoModal";


export default function ProfileSummary({ isOpen, onOpen, onClose }) {
    const { userInformation, header, profileImg, banner, profession, fullName } = useContext(userContext)

    const [editData, setEditData] = useState({})


    return (

        <Flex flexDir="column" border={`0.5px solid ${colors.border}`} borderRadius="0.5rem" backgroundColor={colors.white} w="48.875rem" h="26rem">
            <Flex>
                <Flex justifyContent="end">
                    <Flex cursor="pointer" marginTop="1.2rem" marginRight="1.2rem" align="center" justifyContent="center" backgroundColor={colors.white} borderRadius="50%" zIndex={2} position="absolute" h="2rem" w="2rem" >
                        <Image w="1rem" h="1rem" src={editblue} />
                    </Flex>
                    <Image position="relative" borderTopRadius="0.5rem" w="48.875rem" h="12.219rem" src={banner} />
                </Flex>
                <Image marginLeft="2rem" marginTop="6rem" position="absolute" borderRadius="50%" border="2px solid white" w="9.5rem" h="9.5rem" src={profileImg} />
            </Flex>
            <Flex onClick={onOpen} cursor="pointer" align="end" h="3.25rem" paddingX="1rem" justifyContent="end">
                <Image borderRadius="50%" padding="0.5rem" _hover={{ bgColor: colors.bgHover }} minW="1.5rem" minH="1.5rem" src={edit} />
            </Flex>
            <Flex flexDir="column" marginTop="1rem" paddingX="1.5rem">
                <Heading fontSize="1.5rem" fontWeight={600}>{fullName}</Heading>
                <Text>{header}</Text>
                <Text fontSize="0.875rem" color={colors.mediumGray}>{userInformation.city} , {userInformation.country}</Text>
                <Flex align="center" gap="1.5" w="100%" paddingTop="0.75rem" h="3rem">
                    <AppButton maxH="2rem" maxW="5.75rem" _hover={{ bgColor: colors.buttonPrimary, border: `2px solid ${colors.buttonPrimary}` }} paddingY="0.375rem" paddingX="1rem" fontWeight={600} fontSize="1rem" color="white" border={`1px solid ${colors.buttonSecondary}`} bgColor={colors.buttonSecondary} text="Open to" />
                    <AppButton maxH="2rem" maxW="10.908rem" _hover={{ bgColor: colors.blueHover, border: `2px solid ${colors.buttonSecondary}` }} paddingY="0.375rem" paddingX="1rem" fontWeight={600} fontSize="1rem" border={`1px solid ${colors.buttonSecondary}`} bgColor="white" color={colors.buttonSecondary} text="Add profile section" />
                    <AppButton maxH="2rem" maxW="4.418rem" _hover={{ bgColor: colors.bgHover, border: `2px solid ${colors.mediumGray}` }} paddingY="0.375rem" paddingX="1rem" fontWeight={600} fontSize="1rem" border={`1px solid ${colors.mediumGray}`} bgColor="white" color={colors.mediumGray} text="More" />
                </Flex>
            </Flex>
            <EditInfoModal userInformation={userInformation} isOpen={isOpen} onClose={onClose} />
        </Flex >
    )
}