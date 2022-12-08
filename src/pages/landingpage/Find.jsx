import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import AppButton from "../../components/AppButton";
import { colors } from "../../themes/colors";
import arrowUp from "../../assets/svg/arrowUp.svg"
import arrowDown from "../../assets/svg/arrowDown.svg"

export default function Find() {

    const [showAll, setShowAll] = useState(false)
    const find1 = [
        { text: "Engineering" },
        { text: "Business Development" },
        { text: "Finance" },
        { text: "Administrative Assistant" },
        { text: "Retail Associate" },
        { text: "Costumer Service" },
        { text: "Operstions" },
        { text: "Information Technology" },
        { text: "Marketing" },
        { text: "Human Resources" },
        { text: "Healthcare Services" },
        { text: "Sales" },
        { text: "Program and Project Management" },
        { text: "Accounting" },
        { text: "Arts and Design" },
        { text: "Community and Social Services" },
        { text: "Consulting" },
        { text: "Education" },
        { text: "Entrepreneurship" },
        { text: "Legal" },
        { text: "Media and Comunications" },
        { text: "Military and Protective Services" },
        { text: "Product Management" },
        { text: "Purchasing" },
        { text: "Quality Assurance" },
        { text: "Real Estate" },
        { text: "Research" },
        { text: "Support" },
        { text: "Administrative" },
    ]



    return (
        // 21rem

        <Flex paddingY={["5rem", "3rem", "0", "0"]} justifyContent="center" alignItems="center">
            <Flex paddingX={["1rem", "1rem", "0", "0"]}>
                <Flex paddingY={["1rem", "1rem", "3rem", "3rem"]} >
                    <Flex flexDir={["column", "column", "row", "row"]} w="100%" justifyContent="space-between">
                        <Flex>
                            <Heading marginBottom={["1rem", "1rem", "0", "0"]} h={["5rem", "5rem", "7.5rem", "7.5rem"]} fontSize={["2rem", "2rem", "3rem", "3rem"]} w={["100%", "100%", "25.5rem", "25.5rem"]} textShadow="1px 0px 0.5px #8f5849" fontWeight={[400, 400, 200, 200]} as="h2">Find the right job or internship for you</Heading>
                        </Flex>
                        <Flex gap="0.75rem" w={["20.5rem", "20.5rem", "40.5rem", "40.5rem"]} flexDir="column">
                            <Text marginBottom={["1.25rem", "0.5rem", "1.25rem", "1.25rem"]} color={colors.linkText} fontWeight={600} fontSize="1rem">SUGGESTED SEARCHES
                            </Text>
                            <Flex w={["23.875rem", "23.875rem", "40.5rem", "40.5rem"]} flexWrap="wrap" padding="0" gridGap="0.375rem" >
                                {showAll ? find1.map((data, index) =>

                                    <Flex key={index} gap="0.375rem">
                                        <AppButton _active={{ backgroundColor: "transparent", color: colors.buttonSecondary, border: `1px solid ${colors.buttonSecondary}` }} _hover={{ backgroundColor: "#e4e3de", color: colors.primaryText }} border={`1px solid ${colors.linkText}`} backgroundColor="transparent" fontSize="1.25rem" paddingX="1.5rem" paddingY="1rem" color="#000000BF" text={data.text} />
                                    </Flex>
                                ) : find1.slice(0, 10).map((data, index) =>

                                    <Flex key={index} gap="0.375rem">
                                        <AppButton _active={{ backgroundColor: "transparent", color: colors.buttonSecondary, border: `1px solid ${colors.buttonSecondary}` }} _hover={{ backgroundColor: "#e4e3de", color: colors.primaryText }} border={`1px solid ${colors.linkText}`} backgroundColor="transparent" fontSize="1.25rem" paddingX="1.5rem" paddingY="1rem" color="#000000BF" text={data.text} />
                                    </Flex>
                                )}

                            </Flex>
                            <AppButton _active={{ color: "#000000BF" }} h="3rem" paddingX="0.5rem" color="#000000BF" _hover={{ backgroundColor: colors.background, color: colors.primaryText }} w="7.909rem" borderRadius="0" backgroundColor="transparent" onClick={() => {
                                setShowAll(prev => !prev)
                            }} right image src={showAll ? arrowUp : arrowDown} i text={showAll ? "Show less" : "Show more"} />


                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
