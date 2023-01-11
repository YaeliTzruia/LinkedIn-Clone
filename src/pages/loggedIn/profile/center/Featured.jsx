
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { colors } from "../../../../themes/colors";
import AppTextIcon from "../../../../components/AppTextIcon"
import add from "../../../../assets/svg/work-menu/plus-blue.svg"

import plus from "../../../../assets/svg/work-menu/plus.svg"
import edit from "../../../../assets/svg/profile/edit-pen.svg"



export default function Featured() {


    return (
        <Flex flexDir="column" border={`0.5px solid ${colors.border}`} borderRadius="0.5rem" backgroundColor={colors.white} w="48.875rem" >

            <Flex paddingBottom='0.75rem' flexDir="column" paddingTop="0.75rem" >
                <Flex w="100%" justifyContent="space-between" align="center" paddingX="0.75rem" paddingTop="0.75rem">
                    <Heading paddingLeft="0.75rem" color={colors.blackE6} fontSize="1.25rem" as="h3">Featured</Heading>
                    <Flex cursor="pointer">
                        <Flex justifyContent="center" align="center" borderRadius="50%" _hover={{ bgColor: colors.lightBeige }} h="3rem" w="3rem">
                            <Image h="1.5rem" w="1.5rem" src={plus} alt="add" />
                        </Flex>
                        <Flex justifyContent="center" align="center" _hover={{ bgColor: colors.lightBeige }} borderRadius="50%" h="3rem" w="3rem">
                            <Image h="1.5rem" w="1.5rem" src={edit} alt="edit" />
                        </Flex>
                    </Flex>
                </Flex>

                <Flex paddingBottom='0.75rem' paddingX="1.5rem">
                    <Flex cursor="pointer" justifyContent="center" align="center" borderRadius="0.8rem" border={`0.5px solid ${colors.border}`} w="15.469rem" h="21.5rem">
                        <AppTextIcon padding="0" marginLeft="0.5rem" textColor={colors.buttonSecondary} reverse text="Add new featured item  " alt="add" src={add} />

                    </Flex>
                </Flex>

            </Flex>
        </Flex >
    )
}