import { Center, Divider, Flex, Image, useMediaQuery } from "@chakra-ui/react";

import Logo from "../../assets/Linkedin-logo.png"
import jobs from "../../assets/svg/jobs.svg"
import learning from "../../assets/svg/learning.svg"
import people from "../../assets/svg/people.svg"
import discover from "../../assets/svg/discover.svg"

import AppButton from "../../components/AppButton";
import { colors } from "../../themes/colors";
import AppNavIcon from "../../components/AppNavIcon";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");
    const navigate = useNavigate()

    const navbarLinks = [
        { icon: discover, text: "Discover", h: "1.25rem", w: "1.25rem" },
        { icon: people, text: "People", h: "1.25rem", w: "1.125rem" },
        { icon: learning, text: "Learning", h: "", w: "" },
        { icon: jobs, text: "Jobs", h: "1.125rem", w: "1.25rem" }
    ]

    return (
        <Flex justifyContent="center" w="100%" backgroundColor={colors.white} h={["4,5rem", "4,5rem", "5rem", "5rem"]}>
            <Flex paddingBottom={["0.75rem", "0.75rem", "1rem", "1rem"]} paddingTop="0.75rem" marginX={["1rem", "1rem", "4.75rem", "24.75rem"]} justifyContent="space-between" h={["4,5rem", "4,5rem", "5rem", "5rem"]} w="100%">
                <Flex align="center">
                    <Image w={["5.25rem", "5.25rem", "8.438rem", "8.438rem"]} h={["1.313rem", "1.313rem", "2.109rem", "2.109rem"]} opacity={1} src={Logo} />
                </Flex>
                <Flex align={[null, null, "center", "center"]}>
                    {!isSmallScreen &&
                        <Flex>
                            <Flex>
                                {navbarLinks.map((data) =>
                                    <Flex key={data.text} w="4rem" h="3.25rem" align="center" justifyContent="center" marginX="0.5rem" color={colors.linkText}>
                                        <AppNavIcon className="navbar-images" iconH={data.h} iconW={data.w} text={data.text} icon={data.icon} />
                                    </Flex>
                                )}
                            </Flex>

                            <Center marginTop="0.4rem" marginRight="0.5rem" color={colors.linkText} border="0.063rem" height='2.313rem'>
                                <Divider orientation='vertical' />
                            </Center>
                        </Flex>
                    }
                    <Flex gap="0.7rem" align={[null, null, "center", "center"]}>
                        <AppButton onClick={() => {
                            navigate("/signup")
                        }} _hover={{ backgroundColor: "rgba(0,0,0,0.08)", color: "rgba(0,0,0,0.9)" }} h="3rem" w="6.5rem" fontWeight={700} color={colors.buttonLabelBlack} backgroundColor="transparent" fontSize="1rem" text="Join now" />
                        <AppButton onClick={() => {
                            navigate("/signin")
                        }} h="3.1rem" w="6.3rem" fontWeight={700} backgroundColor="transparent" color={colors.buttonSecondary} border={`1px solid ${colors.buttonSecondary}`} _hover={{ backgroundColor: "rgba(112,181,249,0.15)" }} fontSize="1rem" text="Sign in" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
}