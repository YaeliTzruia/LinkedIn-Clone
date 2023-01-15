import { Divider, Flex } from "@chakra-ui/react";
import { colors } from "../../../../themes/colors";
import questionMark from "../../../../assets/svg/profile/question-mark.svg"
import AppTextIcon from "../../../../components/AppTextIcon";

export default function FirstBox() {


    return (
        <Flex marginBottom="0.5rem" border={`0.5px solid ${colors.border}`} borderRadius="0.5rem" backgroundColor={colors.white} w="20.125rem" h="7.063rem">
            <Flex padding="1rem" w="100%" flexDir="column">
                <AppTextIcon hover={{ cursor: "pointer", textDecor: "underline" }} marginX="0.5rem" textColor={colors.mediumGray} fontSize="1rem" padding="0" justifyContent="space-between" reverse text="Edit public profile & URL" src={questionMark} />
                <Flex justifyContent="center" w="100%" align="center">
                    <Divider w="80%" marginY="1rem" />
                </Flex>
                <AppTextIcon hover={{ cursor: "pointer", textDecor: "underline" }} marginX="0.5rem" textColor={colors.mediumGray} fontSize="1rem" padding="0" justifyContent="space-between" reverse text="Add profile in another language" src={questionMark} />

            </Flex>
        </Flex>


    )
}