import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useContext } from "react"
import { colors } from "../../../../themes/colors";
import dots from "../../../../assets/svg/three-dots.svg"
import publicPost from "../../../../assets/svg/post-public-earth.svg"
import useAuth from "../../../../hooks/useUserInfo";
import PostButtons from "./PostButtons";
import Likes from "./Likes";
import { userContext } from "../../../../context/userContext"

export default function FeedBox({ data }) {
    const time = 2
    const { text } = data
    const { profileImg, profession, fullName } = useContext(userContext)



    return (
        <Flex flexDir="column" overflow="visible" w="100%">

            <Flex paddingX="1rem" marginBottom="0.5rem" paddingTop="0.75rem" w="100%" justifyContent="space-between">
                <Flex >
                    <Image objectFit="cover" marginRight="0.5rem" w="3rem" h="3rem" borderRadius={50} src={profileImg} />
                    <Flex color={colors.mediumGray} lineHeight={1.3} flexDir="column">
                        <Text color={colors.blackE6} fontSize="0.875rem" fontWeight={700}>{fullName}</Text>
                        <Text fontSize="0.75rem">{profession}</Text>
                        <Flex align="center" >
                            <Text fontSize="0.75rem">{time}d</Text>
                            <Text paddingX="0.3rem">•</Text>
                            <Image alt="public" src={publicPost} />
                        </Flex>

                    </Flex>
                </Flex>
                <Flex alignSelf="flex-start">
                    <Image borderRadius={20} padding="0.25rem" cursor="pointer" _hover={{ bg: colors.bgHover, }} alt="dots" src={dots} />
                </Flex>
            </Flex>
            <Flex paddingX="1rem" paddingBottom="1rem">
                <Text>{text}</Text>
            </Flex>
            <Likes />
            <PostButtons />
        </Flex>
    )
}