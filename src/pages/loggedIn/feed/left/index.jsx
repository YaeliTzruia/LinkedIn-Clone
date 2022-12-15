import { Button, color, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import useAuth from "../../../../hooks/useAuth";
import { colors } from "../../../../themes/colors";
import arrowUp from "../../../../assets/svg/arrowUp.svg"

import arrowDown from "../../../../assets/svg/arrowDown.svg"
import people from "../../../../assets/svg/three-people.svg"
import { useReducer } from "react";

import Recent from "./Recent";
import Groups from "./Groups";
import ImageNdHeader from "./Image&Header";
import TopBottom from "./TopBottom";
import BottomLinks from "./BottomLinks";

export default function Left() {

    const { profileImg, banner, userFullName, profession } = useAuth()
    const [visible, setisvisible] = useReducer((prev) => !prev, true)
    const [visibleG, setisvisibleG] = useReducer((prev) => !prev, true)


    return (
        <Flex overflow="hidden" marginBottom="0.5rem" borderRadius="0.313rem" position="relative" border="none" boxShadow="0 0 0 1px rgb(000/15%),000 rbg(0 0 0 /20%)" gap="0.5rem" flexDir="column" w="14.063rem">

            <Flex flexDir="column" borderRadius="0.3rem" bg="white" w="14.063rem">
                <ImageNdHeader
                    profession={profession} userFullName={userFullName} profileImg={profileImg} banner={banner}
                />
                <TopBottom />
            </Flex>

            <Flex flexDir="column" borderRadius="0.3rem" bg="white" w="14.063rem">
                <Flex flexDir="column" paddingTop="0.5rem">

                    <Recent
                        setisvisible={setisvisible} visible={visible} people={people} arrowDown={arrowDown} arrowUp={arrowUp} />

                    <Groups
                        setisvisibleG={setisvisibleG} visibleG={visibleG} arrowUp={arrowUp} arrowDown={arrowDown} people={people} />

                    <BottomLinks />

                </Flex>
                <Flex paddingLeft="0">
                    <Button
                        fontWeight={600} fontSize="0.875rem" color={colors.linkText} bg="transparent" _hover={{ bg: colors.bgHover }} borderTopRadius="0" w="100%">
                        Discover more
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}