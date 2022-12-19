import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../../../themes/colors";
import add from "../../../assets/svg/work-menu/plus.svg"

export default function BusinessServices() {

    const services = [
        { title: "Talent Solutions", desc: "Find, attract and recruit talent" },
        { title: "Sales Solutions", desc: "Unlock sales opportunities" },
        { title: "Post a job for free", desc: "Get your job in front of quality candidates" },
        { title: "Marketing Solutions", desc: "Acquire customers and grow your business" },
        { title: "Learning Solutions", desc: "Develop talent across your organization" },
    ]

    return (
        <Flex flexDir="column" paddingTop="0.7rem">
            <Flex borderTopRadius="0.5rem" border={colors.borderBottom} w="20.75rem" h="3.563rem">
                <Text fontSize="1rem" fontWeight={600} color={colors.primaryText} padding="1rem 1.5rem">LinkedIn Business Services
                </Text>
            </Flex>
            <Flex paddingTop="0.25rem" paddingBottom="0.5rem" paddingX="1.5rem" wrap="wrap" borderRight={colors.borderBottom} borderLeft={colors.borderBottom} w="20.75rem" >
                {services.map((data, index) =>
                    <Flex cursor="pointer" _hover={{ textDecor: "underline" }} h="2.749rem" paddingY="0.25rem" lineHeight={1.3} key={data.title + index} flexDir="column">
                        <Text fontWeight={600} color={colors.blackE6} fontSize="0.875rem">{data.title}</Text>
                        <Text color={colors.mediumGray} fontSize="0.75rem">{data.desc}</Text>
                    </Flex>
                )}

            </Flex>
            <Button _hover={{ textDecor: "underline", bg: "transparent" }} h="2.749rem" paddingLeft="1.5rem" fontSize="0.875rem" align="center" justifyContent="flex-start" borderTop="none" borderBottomRadius="0.5rem" borderTopRadius="0" border={colors.borderBottom} variant="ghost">Create a Company Page <Image marginLeft="0.2rem" w="1rem" h="1rem" alt="add" src={add} /></Button>
        </Flex>

    )
}