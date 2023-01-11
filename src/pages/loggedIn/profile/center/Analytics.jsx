import { Flex, Heading } from "@chakra-ui/react";
import { colors } from "../../../../themes/colors";
import AppTextIcon from "../../../../components/AppTextIcon"
import eye from "../../../../assets/svg/profile/eye.svg"
import AnalyticsBox from "./AnalyticsBox";
import hourglass from "../../../../assets/svg/profile/hourglass.svg"
import people from "../../../../assets/svg/profile/people.svg"
import statistics from "../../../../assets/svg/profile/statistics.svg"

export default function Analytics() {

    const yourAnalytics = [
        { text: "Discover who's viewed your profile.", title: "103 profile views", alt: "people", src: people },
        { text: "Check out who's engaging with your posts.", title: "54 post impressions", alt: "statistics", src: statistics },
        { text: "See how often you appear in search results.", title: "23 search appearances", alt: "hurglass", src: hourglass },
    ]


    return (
        <Flex flexDir="column" border={`0.5px solid ${colors.border}`} borderRadius="0.5rem" backgroundColor={colors.white} w="48.875rem" >

            <Flex flexDir="column" paddingTop="0.75rem" >
                <Flex paddingLeft="1.5rem" paddingTop="0.75rem">
                    <Heading color={colors.blackE6} fontSize="1.25rem" as="h3">Analytics</Heading>
                </Flex>
                <Flex paddingLeft="1.5rem">
                    <AppTextIcon padding="0" marginRight="0.25rem" fontSize="0.875rem" textColor={colors.mediumGray} alt="eye" src={eye} text="Private to you" />
                </Flex>
                <Flex paddingBottom='0.75rem' paddingX="1.5rem">
                    {yourAnalytics.map((data) =>
                        <AnalyticsBox key={data.text} text={data.text} src={data.src} alt={data.alt} title={data.title} />
                    )}
                </Flex>

            </Flex>
        </Flex>
    )
}