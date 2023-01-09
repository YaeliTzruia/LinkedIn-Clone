import { Flex, Image, Text } from "@chakra-ui/react";

export default function AppTextIcon({ reverse = false, justifyContent, imgW, imgH, cursor, hover, h, padding = "0.75rem", flexDir = "row", alt, text, src, textColor, borderBottom, className, fontWeight = 600, fontSize = "0.75rem", ...props }) {


    return (
        <>

            {reverse ?
                (
                    <Flex justifyContent={justifyContent} cursor={cursor} _hover={hover} flexDir={flexDir} maxH="2.613rem" h={h} borderBottom={borderBottom} align="center" padding={padding}>
                        <Text fontSize={fontSize} fontWeight={fontWeight} color={textColor}>{text}</Text>
                        <Image w={imgW} h={imgH} className={className} {...props} src={src} alt={alt} />
                    </Flex>
                )
                :
                (
                    <Flex cursor={cursor} _hover={hover} flexDir={flexDir} maxH="2.613rem" h={h} borderBottom={borderBottom} align="center" padding={padding}>
                        <Image w={imgW} h={imgH} className={className} {...props} src={src} alt={alt} />
                        <Text fontSize={fontSize} fontWeight={fontWeight} color={textColor}>{text}</Text>
                    </Flex>
                )}
        </>

    )
}