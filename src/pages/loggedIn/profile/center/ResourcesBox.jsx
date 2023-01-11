import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { colors } from "../../../../themes/colors";

export default function ResourcesBox({ title, text, src, alt }) {


    return (
        <Flex paddingY="0.75rem" gap="0.5rem" color={colors.blackE6}>
            {/* <Flex> */}
            <Flex >
                <Image maxW="1.5rem" maxH="1.5rem" minW="1.5rem" minH="1.5rem" alt={alt} src={src} />
            </Flex>

            {/* </Flex> */}
            <Flex flexDir="column">
                <Heading _hover={{ w: "max-content", color: colors.buttonSecondary, borderBottom: `1px solid ${colors.buttonSecondary}` }} cursor="pointer" fontWeight={600} fontSize="1rem" as="h5">{title}</Heading>
                <Text paddingTop="0.25rem" lineHeight="1.42857" fontSize="0.875rem">{text}</Text>
            </Flex>
        </Flex>
    )
}