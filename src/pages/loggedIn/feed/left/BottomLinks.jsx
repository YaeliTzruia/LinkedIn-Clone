import { AddIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../../themes/colors";


export default function BottomLinks() {

    return (
        <>

            <Flex paddingLeft="0.75rem" paddingBottom="0.45rem" align="center" >
                <Text _hover={{ textDecor: `1px underline ${colors.buttonSecondary}` }} w="85%" cursor="pointer" fontWeight={700} fontSize="0.75rem" color={colors.buttonSecondary}>Events</Text>
                <Flex
                    borderRadius="50%" position="relative" w="2rem" h="2rem"
                    _hover={{ transition: "0.5s", bg: colors.bgHover }} cursor="pointer" color={colors.mediumGray}  >
                    <AddIcon marginLeft="0.6rem" marginTop="0.6rem" borderRadius="50%" w="0.75rem" h="0.75rem" />
                </Flex>

            </Flex>
            <Flex paddingLeft="0.75rem" paddingBottom="0.5rem" borderBottom={colors.borderBottom} >
                <Text _hover={{ textDecor: `1px underline ${colors.buttonSecondary}` }} w="85%" cursor="pointer" fontWeight={700} fontSize="0.75rem" color={colors.buttonSecondary}>Followed Hashtags</Text>
            </Flex>
        </>
    )
}