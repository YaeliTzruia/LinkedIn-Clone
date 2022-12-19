import { color, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../../../../themes/colors";


export default function Likes() {
    const numberComments = "10"
    const numberReposts = "2"
    return (
        <Flex justifyContent="space-between" fontSize="0.75rem" color={colors.mediumGray} marginX="1rem">
            <Flex align="center">
                <Image cursor="pointer" w="1rem" h="1rem" alt="like" src="https://static.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss" />
                <Text paddingLeft="0.25rem" >11</Text>
            </Flex>
            <Flex>
                <Text>{numberComments} comments</Text>
                <Text marginX="0.25rem">•</Text>
                <Text>{numberReposts} reposts</Text>
            </Flex>
        </Flex>
    )
}