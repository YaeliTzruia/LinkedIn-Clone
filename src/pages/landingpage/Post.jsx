import { Flex, Heading } from "@chakra-ui/react";
import AppButton from "../../components/AppButton";
import { colors } from "../../themes/colors";

export default function Post() {


    return (
        <Flex justifyContent="center" alignItems="center" h="15rem" w="100%" backgroundColor="#f0ebe6">
            <Flex paddingX={["0.2rem", "1.5rem", "0", "0"]} flexDir={["column", "column", "row", "row"]} w={["100%", "25.875rem", "70.5rem", "70.5rem"]}>
                <Flex w={["100%", null, "30rem", "30rem"]} h="6.25rem">
                    <Heading marginRight={["0", "4.188rem", "4.188rem", "4.188rem"]} color="#b24020" fontWeight={[600, 500, 400, 400]} fontSize={["2rem", "2rem", "3.5rem", "3.5rem"]} as="h2">Post your job for millions of people to see</Heading>

                </Flex>
                <AppButton marginRight="0.375rem" marginBottom="0.75rem" w="8.585rem" paddingX="1.5rem" paddingY="0.75rem" fontSize="1.25rem" backgroundColor="transparent" color={colors.buttonSecondary} border={`1px solid ${colors.buttonSecondary}`} text="Post a job" />
            </Flex>
        </Flex>
    )
}