import { Button, Flex, Image, Text } from "@chakra-ui/react";
import AppTextIcon from "../../../../components/AppTextIcon";
import { colors } from "../../../../themes/colors";

export default function Groups({ setisvisibleG, visibleG, arrowUp, arrowDown, people }) {


    const recent = [
        { text: "The ICF Community" },
        { text: "Premium Career Group" },

    ]

    return (
        <>
            <Flex justifyContent="space-between" align="center">
                <Text
                    cursor="pointer" onClick={setisvisibleG} w="90%" className="myDIV2" _hover={{ textDecor: `1px underline ${colors.buttonSecondary}` }} paddingLeft="0.75rem" paddingBottom="0.4rem" fontWeight={700} fontSize="0.75rem" color={colors.buttonSecondary}>
                    Groups
                </Text>
                <Image
                    paddingRight="0.9rem" className="myDIV2 navbar-images hide" alt="arrow"
                    src={visibleG ? arrowUp : arrowDown} />
            </Flex>
            {visibleG &&
                <Flex gap="0.1rem" paddingTop="0.5rem" marginBottom="0.9rem" flexDir="column">
                    {recent.map((data) =>
                        <Flex key={data.text} justifyContent="center" h="1.4rem" flexDir="column" cursor="pointer" _hover={{ bg: colors.bgHover }}>
                            <AppTextIcon src={people} marginRight="0.45rem" w="1rem" h="1rem" className="navbar-images" textColor={colors.linkText} alt="premium" text={data.text} justifyContent="center" cursor="pointer" _hover={{ bg: colors.bgHover }} />
                        </Flex>
                    )}
                    <Flex cursor="pointer" _hover={{ bg: colors.bgHover }} w="14.063rem" h="1.5rem" align="center">
                        <Button _hover={{ bgColor: "transparent" }} variant="ghost" paddingLeft="2.25rem" fontSize="0.75rem" fontWeight={600} color={colors.linkText}>See all</Button>
                    </Flex>

                </Flex>
            }
        </>
    )




}