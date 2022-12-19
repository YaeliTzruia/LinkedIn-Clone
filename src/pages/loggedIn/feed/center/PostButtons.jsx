import like from "../../../../assets/svg/post-tumb-up.svg"
import share from "../../../../assets/svg/post-send-arrow.svg"
import comment from "../../../../assets/svg/post-chat.svg"


import { Button, Flex, Image, Img } from "@chakra-ui/react";
import { colors } from "../../../../themes/colors";

export default function PostButtons() {

    const repostImg = "https://static.licdn.com/sc/h/9c63smlahzbgqnx5wxaq3faa0"

    const buttons = [
        { icon: comment, text: 'Comment', w: "9.274rem" },
        { icon: repostImg, text: 'Repost', w: "8.131rem" },
        { icon: share, text: 'Send', w: "7.204rem" },
    ]

    return (
        <Flex w="33.75rem" padding="0.25rem 0.75rem" align="center" justifyContent="space-between">
            <Button
                color={colors.mediumGray} _hover={{ bg: colors.bgHover }} variant="ghost" w="6.89rem" padding="0.625rem 0.5rem" h="3rem"><Image marginRight="0.25rem" alt="Like" src={like} />Like
            </Button>
            {buttons.map((data) =>
                <Button color={colors.mediumGray} _hover={{ bg: colors.bgHover }} variant="ghost" w={data.w} padding="0.625rem 0.5rem" h="3rem"><Image marginRight="0.25rem" alt={data.text} src={data.icon} />{data.text}</Button>
            )}
        </Flex>
    )
}