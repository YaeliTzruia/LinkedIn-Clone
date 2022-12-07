import { Flex, Image, Text } from "@chakra-ui/react";
import FooterLandingData from "../../Json-data/footer/FooterLandingData"
import logo from "../../assets/Linkedin-logo-png2.png"

export default function FooterLanding() {
    const { general, browse, solutions, directories } = FooterLandingData()

    return (
        <Flex justifyContent="center" h="23.5rem" backgroundColor="#f4f3f1" w="100%">
            <Flex h="24.125rem" w="70.5rem" justifyContent="space-between" paddingTop="1.5rem" paddingBottom="1.25rem">
                <Flex>
                    <Image h="1.438rem" w="5.25rem" alt="LinkedIn Logo" src={logo} />
                </Flex>
                <Flex >
                    <Flex marginRight="1.5rem" w="12rem" flexDir="column">
                        <Text marginBottom="0.5rem" color="#000000E6" fontWeight={600} fontSize="1rem">General</Text>
                        {general.map((data, index) =>
                            <Text cursor="pointer" _hover={{ backgroundColor: "transparent", color: "#1d5d9f", textDecor: "underline" }} color="#00000099" fontWeight={600} fontSize="0.875rem">{data.text}</Text>
                        )}
                    </Flex>
                    <Flex marginRight="1.5rem" w="12rem" flexDir="column">
                        <Text marginBottom="0.5rem" color="#000000E6" fontWeight={600} fontSize="1rem">Bowse LinkedIn</Text>
                        {browse.map((data, index) =>
                            <Text cursor="pointer" _hover={{ backgroundColor: "transparent", color: "#1d5d9f", textDecor: "underline" }} color="#00000099" fontWeight={600} fontSize="0.875rem">{data.text}</Text>
                        )}
                    </Flex>
                    <Flex marginRight="1.5rem" w="12rem" flexDir="column">
                        <Text marginBottom="0.5rem" color="#000000E6" fontWeight={600} fontSize="1rem">Business Solutions</Text>
                        {solutions.map((data, index) =>
                            <Text cursor="pointer" _hover={{ backgroundColor: "transparent", color: "#1d5d9f", textDecor: "underline" }} color="#00000099" fontWeight={600} fontSize="0.875rem">{data.text}</Text>
                        )}
                    </Flex>
                    <Flex marginRight="1.5rem" w="12rem" flexDir="column">
                        <Text marginBottom="0.5rem" color="#000000E6" fontWeight={600} fontSize="1rem">Directories</Text>
                        {directories.map((data, index) =>
                            <Text cursor="pointer" _hover={{ backgroundColor: "transparent", color: "#1d5d9f", textDecor: "underline" }} color="#00000099" fontWeight={600} fontSize="0.875rem">{data.text}</Text>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}