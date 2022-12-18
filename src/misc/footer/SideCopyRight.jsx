import { Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Select, Text } from "@chakra-ui/react";
import blackLogo from "../../assets/svg/black-logo.svg"
import { SlArrowDown } from "react-icons/sl"
import { colors } from "../../themes/colors";

export default function SideCopyRight() {


    const nav = [
        { text: "About" },
        { text: "Accessibility" },
        { text: "Help Center" },
        { text: "Privacy & Terms" },
        { text: "Add Choices" },
        { text: "Advertising" },
        { text: "Business Services" },
        { text: "Get the LinkedIn app" },
        { text: "More" },

    ]

    return (
        <Flex backgroundColor={colors.background} color="#00000099"  >
            <Flex flexDir="column" align="center">
                <Flex w="100%" align="center" flexDir="column" >


                    <Flex justifyContent="center" alignItems="center" marginX="1.5rem" w="16.688rem" flexWrap="wrap">
                        {nav.map((data) =>
                            <Flex>
                                <Text _hover={{ backgroundColor: "transparent", color: "#1d5d9f", textDecor: "underline" }} cursor="pointer" padding="0.5rem" fontSize="0.75rem" fontWeight={600} key={data.text}>
                                    {data.text}
                                </Text>
                            </Flex>
                        )}
                    </Flex>


                    <Flex align="center" padding="0.5rem">
                        <Image marginRight="0.5rem" w="3.5rem" h="0.875rem" alt="LinkedIn logo" src={blackLogo} />
                        <Flex fontSize="0.75rem">© 2022</Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )




}