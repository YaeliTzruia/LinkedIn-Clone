import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../../../../themes/colors"
import useAuth from "../../../../hooks/useUserInfo"
import photo from "../../../../assets/svg/photo-post.svg"
import video from "../../../../assets/svg/video-add.svg"
import audio from "../../../../assets/svg/audio-add.svg"
import article from "../../../../assets/svg/article-add.svg"

export default function ShareBox() {
    const { profileImg } = useAuth()
    const postOptions = [
        { icon: photo, name: "Photo" },
        { icon: video, name: "Video" },
        { icon: audio, name: "Audio event" },
        { icon: article, name: "Write article" }
    ]

    return (
        <Flex boxShadow={colors.boxShadow} borderRadius="0.3rem" bg="white" w="33.75rem" h="7.25rem">

            <Flex flexDir="column">
                <Flex align="center" margin="0.5rem 1rem 0">
                    <Image marginRight="0.5rem" borderRadius="50" h="3rem" w="3rem" src={profileImg} />
                    <Button marginY="0.25rem" padding="0.625rem 0.5rem 0.625rem 1rem" color={colors.linkText} justifyContent="flex-start" border="0.5px solid rgba(0, 0, 0, 0.3)" borderRadius={50} variant="ghost" textAlign="start" h="3rem" w="28.25rem">Start a post</Button>
                </Flex>
                <Flex justifyContent="space-evenly" w="33.75rem">
                    {postOptions.map((data) =>
                        <Button key={data.name} h="3rem" variant="ghost" >
                            <Image src={data.icon} />
                            <Text color={colors.mediumGray} fontSize="0.875rem" marginLeft="0.5rem">{data.name}</Text>
                        </Button>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}