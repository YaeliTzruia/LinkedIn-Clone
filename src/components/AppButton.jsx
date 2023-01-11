import { Button, Flex, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";

export default function AppButton({ iconHeight = "1.5rem", imgHeight = '1.5rem', iconWidth = "1.5rem", icons = false, image = false, right = false, left = false, paddingY = "0.78rem", paddingX = "1.5rem", borderRadius = "28px", src, icon, text, imgLeftMarginRight = "1rem", ...oterProps }) {
    // const [selected, setSelected] = useState(false)

    if (image && left) {
        return (
            <Flex w="100%" justifyContent="space-between" >
                <Button borderRadius={borderRadius} paddingY={paddingY} paddingX={paddingX} w="100%" {...oterProps} leftIcon={<Image backgroundColor="transparent" marginRight={imgLeftMarginRight} position="relative" h={imgHeight} src={src} />}>{text}</Button>
            </Flex>
        )
    }
    if (image && right) {
        return (
            <Flex w="100%" justifyContent="space-between" >
                <Button borderRadius={borderRadius} paddingY="0.78rem" paddingX="1.5rem" w="100%" {...oterProps} rightIcon={<Image position="relative" w={iconWidth} h={iconHeight} src={src} />}>{text}</Button>
            </Flex>
        )
    }
    if (icons && left) {
        return (
            <Flex w="100%" justifyContent="space-between" >
                <Button borderRadius={borderRadius} paddingY="0.78rem" paddingX="1.5rem" w="100%" {...oterProps} leftIcon={icon}>{text}</Button>
            </Flex>
        )
    }
    if (icons && right) {
        return (
            <Flex w="100%" justifyContent="space-between" >
                <Button borderRadius={borderRadius} paddingY="0.78rem" paddingX="1.5rem" w="100%" {...oterProps} rightIcon={icon}>{text}</Button>
            </Flex>
        )
    }
    return (



        <Button h="min-content" {...oterProps} borderRadius={borderRadius} paddingY={paddingY} paddingX={paddingX}>
            {text}
        </Button >
    )
}