import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { userContext } from "../../../../context/userContext";
import { colors } from "../../../../themes/colors";
import edit from "../../../../assets/svg/profile/edit-pen.svg"
import editblue from "../../../../assets/svg/profile/edit-pen-blue.svg"
import AppButton from "../../../../components/AppButton";
import ProfileSummary from "./ProfileSummary";
import Analytics from "./Analytics";

export default function ProfileCenter() {


    return (

        <Flex gap="0.5rem" flexDir="column">
            <ProfileSummary />
            <Analytics />
        </Flex>
    )
}