import { border, Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import { colors } from "../themes/colors";
import downArrow from "../assets/svg/down-arrow.svg"
import useNavbar from "../hooks/useAuth";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function AppNavIcon({ index, arrow = false, borderRadius, className, text, icon, iconW, iconH, fontSize = "14px" }) {

    const [isActive, setIsactive] = useState([])
    const [selected, setSelected] = useState(false)
    return (
        <Flex cursor="pointer" paddingTop="0.3rem" flexDir="column">
            <Flex justifyContent="space-between" h="2.8rem" align="center" flexDir="column">
                {/* <NavLink to="feed" className={({ isActive }) =>
                    isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                }
                > */}
                <Flex >
                    <Image borderRadius={borderRadius} className={className} w={iconW} h={iconH} color={colors.linkText} src={icon} />
                </Flex>
                <Flex>
                    <Text paddingBottom="0.2rem" color={colors.linkText} fontSize={fontSize} fontWeight={400} lineHeight="1.25">{text}</Text>
                    {arrow && <Image src={downArrow} />}
                </Flex>
                {!arrow && selected && <Divider width='105%' border="1.5" borderColor="black" orientation='horizontal' />}
                {/* </NavLink> */}
            </Flex>
        </Flex >
    )
}