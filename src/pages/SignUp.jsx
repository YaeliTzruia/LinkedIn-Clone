import { Flex, Heading, Image } from "@chakra-ui/react";
import CopyRight from "../misc/footer/CopyRight";
import { colors } from "../themes/colors";
import logo from "../assets/Linkedin-logo-png2.png"

export default function SignUp() {


    return (
        <Flex flexDir=" column" justifyContent="center" w="100%" backgroundColor={colors.background}>
            <Flex flexDir=" column" alignItems="center" w="100%" h="64.85rem">
                < Flex paddingTop="1.5rem" w={["100%", "100%", "70.5rem", "70.5rem"]} >
                    <Image w="8.438rem" h="2.109rem" src={logo} alt="LinkedIn logo name" />
                </Flex >
                <Heading fontWeight={400} paddingY="1.5rem" paddingX="1rem" fontSize="2rem">Make the most of your professional life</Heading>
                <Flex borderRadius="0.5rem" padding="1.5rem" w="25rem" h="26.994rem" backgroundColor="white">

                </Flex>
            </Flex>
            <Flex h="3.125rem" backgroundColor="white">
                <CopyRight />
            </Flex>
        </Flex >
    )
}