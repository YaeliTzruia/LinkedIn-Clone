import { Divider, Flex, Heading } from "@chakra-ui/react";
import { colors } from "../../../../themes/colors";
import AppTextIcon from "../../../../components/AppTextIcon"
import AppButton from "../../../../components/AppButton"
import eye from "../../../../assets/svg/profile/eye.svg"
import arrow from "../../../../assets/svg/profile/arrow-right.svg"
import ResourcesBox from "./ResourcesBox";
import people from "../../../../assets/svg/profile/people.svg"
import creator from "../../../../assets/svg/profile/creator.svg"

export default function Resources() {

    const yourResources = [
        { text: "Get discovered, showcase content on your profile, and get access to creator tools", title: "Creator mode", alt: "people", src: creator },
        { text: "See and manage your connections and interests.", title: "My network", alt: "statistics", src: people },

    ]

    return (
        <Flex flexDir="column" border={`0.5px solid ${colors.border}`} borderRadius="0.5rem" backgroundColor={colors.white} w="48.875rem" >

            <Flex flexDir="column" paddingTop="0.75rem" >
                <Flex paddingLeft="1.5rem" paddingTop="0.75rem">
                    <Heading color={colors.blackE6} fontSize="1.25rem" as="h3">Resources</Heading>
                </Flex>
                <Flex paddingLeft="1.5rem">
                    <AppTextIcon padding="0" marginRight="0.25rem" fontSize="0.875rem" textColor={colors.mediumGray} alt="eye" src={eye} text="Private to you" />
                </Flex>
                <Flex flexDir="column" paddingX="1.5rem">
                    {yourResources.map((data) =>
                        <>
                            <ResourcesBox key={data.text} text={data.text} src={data.src} alt={data.alt} title={data.title} />
                            <Divider w="100%" color={colors.border} />
                        </>
                    )}

                </Flex>
                <Flex >
                    <AppButton paddingTop='0.75rem' w="100%" borderRadius="0" borderBottomRadius="10" image right iconWidth="1rem" iconHeight="1rem" src={arrow} text="Show all 5 resources" color={colors.mediumGray} variant="ghost" />

                </Flex>
            </Flex>
        </Flex>
    )
}