import { Flex, Heading, Text } from "@chakra-ui/react";
import AppButton from "../../components/AppButton";
import { colors } from "../../themes/colors";

export default function Explore() {

    const explore1 = [
        { text: "See All Topics" },
        { text: "Workplace" },
        { text: "Job Search" },
        { text: "Careers" },
        { text: "Intervewing" },
        { text: "Salary and Compensation" },
        { text: "Internship" },
        { text: "Employee Benefits" },
    ]




    return (
        <Flex justifyContent="center" alignItems="center" w="100%" backgroundColor={colors.background}>
            <Flex paddingY="3rem" paddingX={["1rem", "1rem", "0", "0"]} w={["100%", "100%", "70.5rem", "70.5rem"]} >
                <Flex flexDir={["column", "column", "row", "row"]} w="100%" justifyContent="space-between">
                    <Flex>
                        <Heading marginBottom={["1rem", "1rem", "0", "0"]} h={["5rem", "5rem", "7.5rem", "7.5rem"]} fontSize={["2rem", "2rem", "3rem", "3rem"]} w={["100%", "100%", "25.5rem", "25.5rem"]} textShadow="1px 0px 0.5px #8f5849" fontWeight={[400, 400, 200, 200]} as="h2">Explore topics you are interested in</Heading>
                    </Flex>
                    <Flex gap="0.75rem" w={["20.5rem", "20.5rem", "40.5rem", "40.5rem"]} flexDir="column">
                        <Text marginBottom={["1.25rem", "0.5rem", "1.25rem", "1.25rem"]} color={colors.linkText} fontWeight={600} fontSize="1rem">CONTENT TOPICS</Text>
                        <Flex w={["20.5rem", "23.875rem", "40.5rem", "40.5rem"]} flexWrap="wrap" padding="0" gridGap="0.375rem"  >
                            {explore1.map((data) =>
                                <Flex key={data.text} gap="0.375rem">
                                    <AppButton _active={{ backgroundColor: "transparent", color: colors.buttonSecondary, border: `1px solid ${colors.buttonSecondary}` }} _hover={{ backgroundColor: "#e4e3de", color: colors.primaryText }} border={`1px solid ${colors.linkText}`} backgroundColor="transparent" fontSize="1.25rem" paddingX="1.5rem" paddingY="1rem" color="#000000BF" text={data.text} />
                                </Flex>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
