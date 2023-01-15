import { Flex } from "@chakra-ui/react";
import LoggedInNavbar from "../../../misc/navbar/LoggedInNavbar";
import { colors } from "../../../themes/colors";
import ProfileCenter from "./center";
import ProfileRight from "./right";

export default function Profile() {




    return (
        <Flex flexDir="column" minH="70rem" w="100%" backgroundColor={colors.background}>
            <Flex w="100%" zIndex={4} position="fixed">
                <LoggedInNavbar />
            </Flex>
            <Flex justifyContent="center" paddingTop="4.5rem">
                <Flex justifyContent="space-between" w={["20.5remrem", "25.875rem", "70.5rem", "70.5rem"]} >
                    <ProfileCenter />
                    <ProfileRight />
                </Flex>
            </Flex>
        </Flex >
    )
}