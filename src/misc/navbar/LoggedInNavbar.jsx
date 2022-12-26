import { Box, Button, Center, color, Divider, Flex, Image, Link, useDisclosure, useMediaQuery } from "@chakra-ui/react";

import Logo from "../../assets/linkedin-2.png"
import jobs from "../../assets/svg/jobs.svg"
import work from "../../assets/svg/work2.svg"
import learning from "../../assets/svg/learning.svg"
import people from "../../assets/svg/people.svg"
import home from "../../assets/svg/home.svg"
import messaging from "../../assets/svg/messaging.svg"
import magnifyingGlass from "../../assets/svg/magnifying-glass.svg"
import notifications from "../../assets/svg/notifications.svg"
import arrow from "../../assets/svg/feed-arrow-down.svg"

import AppInputField from "../../components/AppInputField"
import AppButton from "../../components/AppButton";
import { colors } from "../../themes/colors";
import AppNavIcon from "../../components/AppNavIcon";
import { NavLink, useNavigate } from "react-router-dom";
import AppSearchField from "../../components/AppSearchField";
import useNavbar from "../../hooks/useUserInfo";
import useAuth from "../../hooks/useUserInfo";
import { useRef } from "react";
import AppNavProfileDorpdown from "../../components/AppNavProfileDropdown";
import AppNavDrawer from "./work/WorkDrawer";

export default function LoggedInNavbar() {

    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const workRef = useRef()


    const { selected, setSelected } = useNavbar()

    const navbarLinksLeft = [
        { icon: home, text: "Home", h: "1.5rem", w: "1.5rem", arrow: false },
        { icon: people, text: "My Network", h: "1.25rem", w: "1.125rem", dropdown: false },
        { icon: jobs, text: "Jobs", h: "1.125rem", w: "1.25rem", dropdown: false },
        { icon: messaging, text: "Messaging", h: "", w: "", dropdown: false },
        { icon: notifications, text: "Notifications", h: "", w: "", dropdown: false },

    ]

    const navbarLinksRight = [
        { icon: work, text: "Work", h: "1.5rem", w: "1.5rem", dropdown: true, sideMenu: true },
        // { icon: learning, text: "Learning", h: "1.5rem", w: "1.5rem", dropdown: false },

    ]
    return (
        <Flex zIndex={2} justifyContent="center" w="100%" backgroundColor={colors.white} h={["4,5rem", "4,5rem", "5rem", "3.3em"]}>
            <Flex justifyContent="space-between" marginX="24.8rem" paddingBottom={["0.75rem", "0.75rem", "1rem", "1rem"]} paddingTop="0.95rem"
                // marginX={["1rem", "1rem", "4.75rem", "24.75rem"]} 
                h={["4,5rem", "4,5rem", "3.25rem", "3.25rem"]} w="100%">
                <Flex alignItems="center" w="20.5rem">
                    <Flex marginRight='0.5rem' align="center">
                        <Image minW={["5.25rem", "5.25rem", "2.136rem", "2.136rem"]} h={["1.313rem", "1.313rem", "2.136rem", "2.136rem"]} opacity={2} src={Logo} />
                    </Flex>
                    <AppSearchField placeholder="Search" right />
                </Flex>
                <Flex marginLeft="10rem" paddingTop="0.2rem" flexDir="row-reverse" w="35rem" align={[null, null, "center", "center"]}>
                    {!isSmallScreen &&
                        <Flex>
                            <Flex justifyContent="center" align="center" position="relative" alignItems="center">
                                {navbarLinksLeft.map((data, index) =>
                                    <Box _hover={{ textDecor: "none", color: "rgba(0,0,0,0.9)" }} minW="5rem" lineHeight="1.5" minH="2.625rem" key={data.text} w="5rem" h="3.25rem" color={colors.linkText}>
                                        <NavLink
                                            style={({ isActive }) => ({
                                                color: isActive ? '#fff' : '#545e6f',
                                                background: isActive ? '#7600dc' : '#f0f0f0',
                                            })}
                                            exact to="/feed"
                                        >
                                            <AppNavIcon index={index} onClick={() => { setSelected(true) }}
                                                dropdown={data.dropdown} selected={selected} borderRadius={data.borderRadius} fontSize="0.75rem"

                                                iconH={data.h} iconW={data.w}
                                                // iconH="1.35rem" iconW="1.4rem"
                                                text={data.text} icon={data.icon} />
                                        </NavLink>
                                    </Box>

                                )}
                                <Flex minW="5rem" lineHeight="1.5" minH="2.625rem" marginBottom="0.1rem" w="5rem" h="3rem" align="center" justifyContent="center" >
                                    <AppNavProfileDorpdown dropdown borderRadius="50%" fontSize="0.75rem" iconH="1.5rem" iconW="1.5rem" text="Me" />
                                </Flex>
                            </Flex>

                            <Center marginRight="0" w="0.1rem" opacity="0.2" marginTop="0.4rem" color={colors.linkText} border="0.063rem" height='3.1rem'>
                                <Divider orientation='vertical' />
                            </Center>
                            <Flex justifyContent="center" w="5rem" h="3.25rem">
                                <AppNavDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} workRef={workRef} fontSize="0.75rem" className="navbar-images" iconH="1.5rem" iconW="1.5rem" text="Work" icon={work} />
                            </Flex>
                        </Flex>
                    }

                </Flex>
            </Flex>
        </Flex >
    )
}