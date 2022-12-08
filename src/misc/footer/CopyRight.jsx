import { Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Select, Text } from "@chakra-ui/react";
import blackLogo from "../../assets/svg/black-logo.svg"
import { SlArrowDown } from "react-icons/sl"


export default function CopyRight() {

    const nav = [
        { text: "About" },
        { text: "Accessibility" },
        { text: "User Agreement" },
        { text: "Privacy Policy" },
        { text: "Cookie Policy" },
        { text: "Copyright Policy" },
        { text: "Brand Policy" },
        { text: "Guest Controls" },
        { text: "Community Guidelines" },

    ]

    return (
        <Flex color="#00000099" w="100%" >
            <Flex flexDir={["column", "column", "row", "row"]} marginX={["0", "0", "24.75rem", "24.75rem"]} align="center" w={["100%", "100%", "70.5rem", "70.5rem"]}>
                <Flex flexDir={["column", "column", "row", "row"]} >
                    <Flex align="center" padding="0.5rem">
                        <Image marginRight="0.5rem" w="3.5rem" h="0.875rem" alt="LinkedIn logo" src={blackLogo} />
                        <Flex fontSize="0.75rem">© 2022</Flex>
                    </Flex>

                    <Flex gridTemplateColumns="1fr 1fr" display={["grid", "grid", "flex", "flex"]}>
                        {nav.map((data, index) =>
                            <Text w={["11.938rem", "11.938rem", "fit-content", "fit-content"]} _hover={{ backgroundColor: "transparent", color: "#1d5d9f", textDecor: "underline" }} cursor="pointer" padding="0.5rem" fontSize="0.75rem" fontWeight={600} key={index + 2}>
                                {data.text}
                            </Text>
                        )}
                    </Flex>
                    {/* </Flex> */}
                    <Flex justifyContent={["flex-start", "flex-start", "center", "center"]} padding="0">
                        <Menu padding="0" maxW={["11.938rem", "11.938rem", "5.861rem", "5.861rem"]}>
                            <MenuButton maxW={["11.938rem", "11.938rem", "5.861rem", "5.861rem"]} border="none" padding="0.5rem" fontSize="0.75rem" fontWeight={600} _active={{ backgroundColor: "transparent" }} _hover={{ backgroundColor: "transparent", color: "#0a66c2", }} backgroundColor="transparent" as={Button} rightIcon={<SlArrowDown />}>
                                Language
                            </MenuButton>
                            <MenuList maxW={["11.938rem", "11.938rem", "5.861rem", "5.861rem"]} zIndex={2} position="relative">
                                <MenuItem fontSize="0.75rem" fontWeight={600} color="#0a66c2" _selected={{ backgroundColor: "#0a66c2", color: "white" }} _hover={{ backgroundColor: "#0a66c2", color: "white" }}>English</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}