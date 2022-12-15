import { Flex, Image, Text } from "@chakra-ui/react";
import AppTextIcon from "../../../../components/AppTextIcon";
import { colors } from "../../../../themes/colors";
import premium from "../../../../assets/svg/premium.svg"
import flag from "../../../../assets/svg/my-items.svg"
import AppTwoText from "../../../../components/AppTwoText";

export default function TopBottom({ }) {


    return (
        <>
            <Flex borderBottom={colors.borderBottom} color={colors.mediumGray} paddingY="0.75rem" flexDir="column" >


                <AppTwoText justifyContent="center" cursor="pointer" _hover={{ bg: colors.bgHover }} fontWeight={600} fontSize="0.75rem" firstText="Who's viewed your profile" secondText="100" secondColor={colors.buttonSecondary} />

                <AppTwoText justifyContent="center" cursor="pointer" _hover={{ bg: colors.bgHover }} fontWeight={600} fontSize="0.75rem" firstText="Impressions of your posts" secondText="56" secondColor={colors.buttonSecondary} />


            </Flex>

            <Flex flexDir="column" cursor="pointer" _hover={{ bg: colors.bgHover }} fontWeight={600} fontSize="0.75rem">
                <AppTextIcon alt="Premium" text="See your Premium features" src={premium} textColor={colors.blackE6} borderBottom={colors.borderBottom} marginRight="0.3rem" w="1rem" h="1rem" />

                <AppTextIcon alt="My Items Flag" text="My items" src={flag} textColor={colors.blackE6} borderBottom={colors.borderBottom} marginRight='0.45rem' w="1rem" h="1rem" />

            </Flex>


        </>
    )
}