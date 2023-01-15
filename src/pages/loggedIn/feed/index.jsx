import { Flex } from "@chakra-ui/react";
import LoggedInNavbar from "../../../misc/navbar/LoggedInNavbar";
import { colors } from "../../../themes/colors";
import Left from "./left/index";
import CenterPart from "./center/index";
import Right from "./right/index";


export default function Feed() {

    return (
        <Flex flexDir="column" minH="70rem" w="100%" backgroundColor={colors.background}>
            <Flex w="100%" zIndex={4} position="fixed">
                <LoggedInNavbar />
            </Flex>
            <Flex justifyContent="center" paddingTop="4.5rem">
                <Flex justifyContent="space-between" w={["20.5remrem", "25.875rem", "70.5rem", "70.5rem"]} >
                    <Left />
                    <CenterPart />
                    <Right />
                </Flex>
            </Flex>
        </Flex >
    )
}