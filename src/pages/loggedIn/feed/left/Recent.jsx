import { Flex, Image, Text } from "@chakra-ui/react";
import AppTextIcon from "../../../../components/AppTextIcon";
import { colors } from "../../../../themes/colors";

export default function Recent({ setisvisible, visible, people, arrowDown, arrowUp }) {

    const recent = [
        { text: "The ICF Community" },
        { text: "Premium Career Group" },

    ]

    return (
        <>
            <Flex paddingLeft="0.75rem" justifyContent="space-between" align="center">
                <Text onClick={setisvisible} cursor="pointer" w="90%" className="myDIV" paddingTop="0.30rem" fontSize="0.75rem">Recent</Text>
                <Image paddingRight="0.9rem" className="myDIV navbar-images hide" alt="arrow" src={visible ? arrowUp : arrowDown} />
            </Flex>
            {visible &&
                <Flex gap="0.1rem" paddingTop="0.5rem" marginBottom="0.9rem" flexDir="column">
                    {recent.map((data) =>
                        <Flex key={data.text} justifyContent="center" h="1.4rem" flexDir="column" cursor="pointer" _hover={{ bg: colors.bgHover }}>
                            <AppTextIcon src={people} marginRight="0.45rem" w="1rem" h="1rem" className="navbar-images" textColor={colors.linkText} alt="premium" text={data.text} justifyContent="center" cursor="pointer" _hover={{ bg: colors.bgHover }} />

                        </Flex>
                    )}


                </Flex>
            }
        </>
    )
}