import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { colors } from "../../../../themes/colors";
import dots from "../../../../assets/svg/three-dots.svg"
import publicPost from "../../../../assets/svg/post-public-earth.svg"
import useAuth from "../../../../hooks/useAuth";
import PostButtons from "./PostButtons";
import Likes from "./Likes";

export default function FeedBox() {

    const { profileImg, userFullName, profession } = useAuth()

    const post = `Don't let anything stand in the way of the light that shines through this form, risk being seen in all of your glory.Our eyes are not viewers, they are also projectors that are running a second story over the picture that we see in front of us all the time, fear is writing that script and the working title is "I'll never be enough". You spend your whole life imagining ghosts, worrying about the pathway to the future, but all that will ever be is what's happening here, in the decisions we make in this moment, which is based in either love or fear. So many of us choose our path out of fear disguised as practicality. What we really want seems impossibly out of reach and ridiculous to expect so we never dare to ask the universe for it - I'm saying, I'm the proof, that you can ask the universe for it. `

    const numDays = "4"

    return (
        <Flex flexDir="column" overflow="visible" w="100%">

            <Flex paddingX="1rem" marginBottom="0.5rem" paddingTop="0.75rem" w="100%" justifyContent="space-between">
                <Flex >
                    <Image marginRight="0.5rem" w="3rem" h="3rem" borderRadius={50} src={profileImg} />
                    <Flex color={colors.mediumGray} lineHeight={1.3} flexDir="column">
                        <Text color={colors.blackE6} fontSize="0.875rem" fontWeight={700}>{userFullName}</Text>
                        <Text fontSize="0.75rem">{profession}</Text>
                        <Flex align="center" >
                            <Text fontSize="0.75rem">{numDays}d</Text>
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
                <Text>{post}</Text>
            </Flex>
            <Likes />
            <PostButtons />
        </Flex>
    )
}