import { Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../../../themes/colors";
import advertice from "../../../assets/svg/work-menu/advertice.svg"
import find from "../../../assets/svg/work-menu/find.svg"
import groups from "../../../assets/svg/work-menu/groups.svg"
import insights from "../../../assets/svg/work-menu/insights.svg"
import post from "../../../assets/svg/work-menu/post.svg"
import services from "../../../assets/svg/work-menu/services.svg"

export default function Visit() {

    const visitWays = [
        { icon: insights, text: "Insights" },
        { icon: post, text: "Post a job" },
        { icon: advertice, text: "Advertise" },
        { icon: find, text: "Find Leads" },
        { icon: groups, text: "Groups" },
        { icon: services, text: "Services Marketplace" }
    ]

    return (

        <Flex flexDir="column" paddingTop="0.5rem">
            <Flex borderTopRadius="0.5rem" border={colors.borderBottom} w="20.75rem" h="3.563rem">
                <Text fontSize="1rem" fontWeight={600} color={colors.primaryText} padding="1rem 1.5rem">Visit More LinkedIn Products</Text>
            </Flex>
            <Flex padding="0.5rem" wrap="wrap" borderBottomRadius="0.5rem" border={colors.borderBottom} w="20.75rem" h="11.749rem">

                {visitWays.map((data) =>
                    <Flex cursor="pointer" paddingTop="0.5rem" w="4.375rem" h="4.124rem" marginX="0.1rem" lineHeight="1.5" textAlign="center" align="center" justifyContent="center" flexDir="column">
                        <Flex paddingTop="0.25rem" align="center" w="4.375rem" minH="4.124rem" flexDir="column" justifyContent="space-between">
                            <Image _hover={{ boxShadow: "1px 3px 2.5px 1px #808080a6" }}
                                borderRadius="0.5rem" border={colors.borderBottom} w="2.5rem" h="2.5rem" alt={data.text} src={data.icon} />
                            <Text fontSize="0.75rem" color={colors.mediumGray}>{data.text}</Text>
                        </Flex>
                    </Flex>
                )}



            </Flex>
        </Flex>
    )
}