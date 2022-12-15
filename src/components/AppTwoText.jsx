import { Flex, Text } from "@chakra-ui/react";

export default function AppTwoText({ firstText, secondText, firstColor, secondColor, ...props }) {


    return (
        <Flex {...props}>
            <Flex paddingTop="0.25rem" w="100%" justifyContent="space-between" marginX="0.8rem" >
                <Text color={firstColor}>{firstText}</Text>
                <Text color={secondColor}>{secondText}</Text>
            </Flex>

        </Flex>
    )

}