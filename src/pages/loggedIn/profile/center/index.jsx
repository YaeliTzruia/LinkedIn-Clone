import { Flex, Heading, Image, Text, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { userContext } from "../../../../context/userContext";
import { colors } from "../../../../themes/colors";
import edit from "../../../../assets/svg/profile/edit-pen.svg"
import editblue from "../../../../assets/svg/profile/edit-pen-blue.svg"
import AppButton from "../../../../components/AppButton";
import ProfileSummary from "./ProfileSummary";
import Analytics from "./Analytics";
import Resources from "./Resources";
import Featured from "./Featured";

export default function ProfileCenter() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <Flex h="400rem" gap="0.5rem" flexDir="column">
            <ProfileSummary isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Analytics />
            <Resources />
            <Featured />
        </Flex>
    )
}