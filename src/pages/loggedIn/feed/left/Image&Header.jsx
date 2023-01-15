import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { colors } from "../../../../themes/colors";

export default function ImageNdHeader({ profession, userFullName, profileImg, banner }) {
    return (

        <Flex h="11.514rem" borderBottom={colors.borderBottom} paddingBottom="1rem" flexDir="column">
            <Flex align="center" justifyContent="center" w="100%" flexDir="column">
                <Image objectFit="cover" borderTopRadius="0.3rem" h="3.516rem" w="100%" position="relative" alt="header image" src={banner} />
                <Image objectFit="cover" marginTop="3.5rem" position="absolute" border="2px solid white" borderRadius="50%" w="4.5rem" h="4.5rem" alt="profile picture" src={profileImg} />
            </Flex>
            <Flex textAlign="center" justifyContent="center">
                <Flex gap={1} flexDir="column" marginTop="3.5rem"  >
                    <Heading cursor="pointer" _hover={{ textDecor: "1px underline" }} fontSize="1rem">{userFullName}</Heading>
                    <Text fontSize="0.875rem" color={colors.linkText}>{profession}</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}