import { Flex, Image, Text } from "@chakra-ui/react";
import AppTextIcon from "../../../../components/AppTextIcon";
import { colors } from "../../../../themes/colors";
import dots from "../../../../assets/svg/profile/three-dots.svg"
import premium from "../../../../assets/linkedin-logo-premium.jpeg"
import { useContext } from "react";
import { userContext } from "../../../../context/userContext";
import AppButton from "../../../../components/AppButton";

export default function SecondBox() {
    const { userInformation, profileImg } = useContext(userContext)


    return (

        <Flex padding="0.5rem" paddingBottom="0.5rem" align="center" flexDir="column" border={`0.5px solid ${colors.border}`
        } borderRadius="0.5rem" backgroundColor={colors.white} w="20.125rem" h="15.625rem" >
            <Flex w="95%" justifyContent="end">

                <AppTextIcon cursor="pointer" fontWeight={400} padding="0" textColor={colors.blackE6} marginLeft="0.5rem" justifyContent="space-between" src={dots} text="Ad" reverse />

            </Flex>
            <Flex textAlign="center" w="80%">
                <Text lineHeight="1rem" fontSize="0.75rem" color={colors.lightGray}> {userInformation.firstName}, make the right connections with this exclusive offer.</Text>
            </Flex>
            <Flex align="center" marginY="0.3rem" w="52%" justifyContent="space-between">
                <Image borderRadius="50%" w="4.375rem" h="4.375rem" src={profileImg} />
                <Image w="4.688rem" h="4.75rem" src={premium} />
            </Flex>
            <Flex marginY="0.3rem" textAlign="center" w="80%">
                <Text lineHeight="1.25rem" color={colors.lightBlack7} fontSize="0.938rem">Enjoy 50% off 2 months of LinkedIn Premium!</Text>
            </Flex>
            <Flex marginY="0.3rem">
                <AppButton paddingY="0" paddingX="1rem" h="2rem" color={colors.buttonSecondary} border={`1px solid ${colors.buttonSecondary}`} bgColor={colors.white} text="Get 50% off today" />
            </Flex>
        </Flex >
    )
}