import { Flex, Heading } from "@chakra-ui/react";
import AppButton from "../../components/AppButton";
import { colors } from "../../themes/colors";

export default function Post() {


    return (
        <Flex justifyContent="center" alignItems="center" h="15rem" w="100%" backgroundColor="#f0ebe6">
            <Flex w="70.5rem">
                <Flex w="30rem" h="6.25rem">
                    <Heading marginRight="4.188rem" color="#b24020" fontWeight={400} fontSize="2.5rem" as="h2">Post your job for millions of people to see</Heading>

                </Flex>
                <AppButton marginRight="0.375rem" marginBottom="0.75rem" w="8.585rem" paddingX="1.5rem" paddingY="0.75rem" fontSize="1.25rem" backgroundColor="transparent" color={colors.buttonSecondary} border={`1px solid ${colors.buttonSecondary}`} text="Post a job" />
            </Flex>
        </Flex>
    )
}