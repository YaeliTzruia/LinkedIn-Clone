import { Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../themes/colors";


export default function AppNavIcon({ borderRadius, className, text, icon, iconW, iconH, fontSize = "14px" }) {

    return (
        <Flex fontWeight={400} wrap="nowrap" cursor="pointer" paddingTop="0.3rem" flexDir="column">
            <Flex h="2.625rem" justifyContent="space-between" alignItems="center" flexDir="column">

                <Flex >
                    <Image borderRadius={borderRadius} className={className} w={iconW} h={iconH} color={colors.linkText} src={icon} />
                </Flex>
                <Flex textAlign="center" justifyContent="center" align="center">
                    <Text fontSize={fontSize} fontWeight={400} >{text}</Text>

                </Flex>





            </Flex>
        </Flex >
    )
}