import { Center, Divider, Flex, Image, useMediaQuery } from "@chakra-ui/react";

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
import { useNavigate } from "react-router-dom";
import AppSearchField from "../../components/AppSearchField";
import useNavbar from "../../hooks/useAuth";
import useAuth from "../../hooks/useAuth";

export default function LoggedInNavbar() {

    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");
    const { profileImg } = useAuth()
    const navigate = useNavigate()

    const { selected, setSelected } = useNavbar()

    const navbarLinksLeft = [
        { icon: home, text: "Home", h: "1.5rem", w: "1.5rem", arrow: false },
        { icon: people, text: "My Network", h: "1.25rem", w: "1.125rem", arrow: false },
        { icon: jobs, text: "Jobs", h: "1.125rem", w: "1.25rem", arrow: false },
        { icon: messaging, text: "Messaging", h: "", w: "", arrow: false },
        { icon: notifications, text: "Notifications", h: "", w: "", arrow: false },

    ]

    const navbarLinksRight = [
        { icon: work, text: "Work", h: "1.5rem", w: "1.5rem", arrow: true },
        { icon: learning, text: "Learning", h: "1.5rem", w: "1.5rem", arrow: false },

    ]
    return (
        <Flex justifyContent="center" w="100%" backgroundColor={colors.white} h={["4,5rem", "4,5rem", "5rem", "3.3em"]}>
            <Flex justifyContent="space-between" marginX="24.8rem" paddingBottom={["0.75rem", "0.75rem", "1rem", "1rem"]} paddingTop="0.95rem"
                // marginX={["1rem", "1rem", "4.75rem", "24.75rem"]} 
                h={["4,5rem", "4,5rem", "3.25rem", "3.25rem"]} w="100%">
                <Flex alignItems="center" w="20.5rem">
                    <Flex marginRight='0.5rem' align="center">
                        <Image w={["5.25rem", "5.25rem", "2.136rem", "2.3rem"]} h={["1.313rem", "1.313rem", "2.136rem", "2.136rem"]} opacity={2} src={Logo} />
                    </Flex>
                    <AppSearchField placeholder="Search" right />
                </Flex>
                <Flex marginLeft="10rem" paddingTop="0.2rem" flexDir="row-reverse" w="35rem" align={[null, null, "center", "center"]}>
                    {!isSmallScreen &&
                        <Flex>
                            <Flex align="center">
                                {navbarLinksLeft.map((data, index) =>
                                    <Flex key={data.text} w="5rem" h="3.25rem" align="center" justifyContent="center" color={colors.linkText}>
                                        <AppNavIcon index={index} onClick={() => { setSelected(true) }}
                                            arrow={data.arrow} selected={selected} borderRadius={data.borderRadius} fontSize="0.75rem" className="navbar-images" iconH={data.h} iconW={data.w} text={data.text} icon={data.icon} />
                                    </Flex>
                                )}
                                <Flex w="5rem" h="3.25rem" align="center" justifyContent="center" >
                                    <AppNavIcon arrow borderRadius="50%" fontSize="0.75rem" iconH="1.5rem" iconW="1.5rem" text="Me" icon={profileImg} />
                                </Flex>
                            </Flex>

                            <Center marginTop="0.4rem" marginRight="0.5rem" color={colors.linkText} border="0.063rem" height='2.313rem'>
                                <Divider orientation='vertical' />
                            </Center>
                            {navbarLinksRight.map((data, index) =>
                                <Flex key={data.text} w="5rem" h="3.25rem" align="center" justifyContent="center" color={colors.linkText}>
                                    <AppNavIcon index={index} onClick={() => { setSelected(true) }} selected={selected} arrow={data.arrow} fontSize="0.75rem" className="navbar-images" iconH={data.h} iconW={data.w} text={data.text} icon={data.icon} />
                                </Flex>
                            )}
                        </Flex>
                    }

                </Flex>
            </Flex>
        </Flex >
    )
}