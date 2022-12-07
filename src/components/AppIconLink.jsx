import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { colors } from "../themes/colors";

export default function AppIconLink({ classname, text, icon, iconW, iconH }) {
    return (
        <Flex flexDir="column">
            <Flex justifyContent="center" h="3.25rem" align="center" flexDir="column">
                <Flex w="1.5rem" h="1.5rem" >
                    <Image className={classname} w={iconW} h={iconH} color={colors.linkText} src={icon} />
                </Flex>
                <Text color={colors.linkText} fontSize="14px" fontWeight={400} lineHeight="1.25">{text}</Text>
            </Flex>
        </Flex>
    )
}