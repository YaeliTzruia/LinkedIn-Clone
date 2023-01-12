import { Flex, Heading, Image, Link, Text, useDisclosure } from "@chakra-ui/react";

import AppButton from "../../../../components/AppButton";
import { colors } from "../../../../themes/colors";
import edit from "../../../../assets/svg/profile/edit-pen.svg"
import linkImg from "../../../../assets/svg/profile/link-arrow.svg"
import EditInfoModal from "../modal/user-information/EditInfoModal";

export default function ProfileSummaryText({ getUserDetails, userInformation, headline, fullName, link, linkText }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const displayLink = linkText || link

    return (
        <>
            <Flex onClick={onOpen} cursor="pointer" align="end" h="3.25rem" paddingX="1rem" justifyContent="end">
                <Image borderRadius="50%" padding="0.5rem" _hover={{ bgColor: colors.bgHover }} minW="1.5rem" minH="1.5rem" src={edit} />
            </Flex>
            <Flex flexDir="column" marginTop="1rem" paddingX="1.5rem">
                <Heading fontSize="1.5rem" fontWeight={600}>{fullName}</Heading>
                <Text>{headline}</Text>
                <Text fontSize="0.875rem" color={colors.mediumGray}>{userInformation.city} , {userInformation.country}</Text>
                <Flex >
                    <Text fontWeight={600} fontSize="0.875rem" _hover={{ cursor: "pointer", textDecor: 'underline' }} onClick={() => document.getElementById("userLink").click()} color={colors.buttonSecondary}>{displayLink}</Text>
                    <Link id="userLink" color={colors.buttonSecondary} fontWeight={600} href={link}></Link>
                    <Image src={linkImg} alt="link" />
                </Flex>
                <Flex align="center" gap="1.5" w="100%" paddingTop="0.75rem" h="3rem">
                    <AppButton maxH="2rem" maxW="5.75rem" _hover={{ bgColor: colors.buttonPrimary, border: `2px solid ${colors.buttonPrimary}` }} paddingY="0.375rem" paddingX="1rem" fontWeight={600} fontSize="1rem" color="white" border={`1px solid ${colors.buttonSecondary}`} bgColor={colors.buttonSecondary} text="Open to" />
                    <AppButton maxH="2rem" maxW="10.908rem" _hover={{ bgColor: colors.blueHover, border: `2px solid ${colors.buttonSecondary}` }} paddingY="0.375rem" paddingX="1rem" fontWeight={600} fontSize="1rem" border={`1px solid ${colors.buttonSecondary}`} bgColor="white" color={colors.buttonSecondary} text="Add profile section" />
                    <AppButton maxH="2rem" maxW="4.418rem" _hover={{ bgColor: colors.bgHover, border: `2px solid ${colors.mediumGray}` }} paddingY="0.375rem" paddingX="1rem" fontWeight={600} fontSize="1rem" border={`1px solid ${colors.mediumGray}`} bgColor="white" color={colors.mediumGray} text="More" />
                </Flex>
                <EditInfoModal getUserDetails={getUserDetails} userInformation={userInformation} isOpen={isOpen} onClose={onClose} />
            </Flex>
        </>
    )
}