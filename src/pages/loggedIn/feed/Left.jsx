import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import useAuth from "../../../hooks/useAuth";
import { colors } from "../../../themes/colors";

export default function Left() {

    const { profileImg, banner, userFullName, profession } = useAuth()
    return (

        <Flex flexDir="column" borderRadius="0.3rem" backgroundColor="white" w="14.063rem">
            <Flex borderBottom={`0.01px solid rgb(0 0 0 / 16%)`} paddingBottom="1rem" flexDir="column">
                <Flex align="center" justifyContent="center" w="100%" flexDir="column">
                    <Image borderTopRadius="0.3rem" h="3.516rem" w="100%" position="relative" alt="header image" src={banner} />
                    <Image marginTop="3.5rem" position="absolute" border="2px solid white" borderRadius="50%" w="4.5rem" h="4.5rem" alt="profile picture" src={profileImg} />

                </Flex>
                <Flex textAlign="center" justifyContent="center">
                    <Flex gap={1} flexDir="column" marginTop="2.75rem"  >
                        <Heading fontSize="1rem">{userFullName}</Heading>
                        <Text fontSize="0.875rem" color={colors.linkText}>{profession}</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex h="12rem">

            </Flex>
        </Flex>
    )
}