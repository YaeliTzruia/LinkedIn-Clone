import { Flex } from "@chakra-ui/react";
import LoggedInNavbar from "../../../misc/navbar/LoggedInNavbar";
import { colors } from "../../../themes/colors";
import Center from "./Center";
import Left from "./Left";
import Right from "./Right";

export default function Feed() {

    return (
        <Flex flexDir="column" h="60rem" w="100%" backgroundColor={colors.background}>
            <LoggedInNavbar />
            <Flex justifyContent="center" paddingTop="1.5rem">
                <Flex alignItems="center" justifyContent="space-between" w={["20.5remrem", "25.875rem", "70.5rem", "70.5rem"]} >
                    <Left />
                    <Center />
                    <Right />
                </Flex>
            </Flex>
        </Flex >
    )
}