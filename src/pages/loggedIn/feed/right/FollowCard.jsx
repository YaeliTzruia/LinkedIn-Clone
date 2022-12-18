import { Flex } from "@chakra-ui/react";
import SideCopyRight from "../../../../misc/footer/SideCopyRight";
import { colors } from "../../../../themes/colors";
import AddToFeed from "./AddToFeed";
import Promoted from "./Promoted";

export default function FollowCard({ ...props }) {



    return (
        <Flex flexDir="column">
            <Flex h="22.112rem" flexDir="column" padding="0.75rem" {...props} textAlign="center" overflow="hidden" marginBottom="0.5rem" borderRadius="0.313rem" position="relative" border="none" boxShadow="0 0 0 1px rgb(000/15%),000 rbg(0 0 0 /20%)">
                <Flex w="100%" flexDir="row-reverse">
                    <AddToFeed />
                </Flex>
            </Flex>
            <Flex h="15.625rem" flexDir="column" paddingX="0.75rem" {...props} textAlign="center" overflow="hidden" marginBottom="0.5rem" borderRadius="0.313rem" position="relative" border="none" boxShadow="0 0 0 1px rgb(000/15%),000 rbg(0 0 0 /20%)">
                <Flex w="100%" flexDir="row-reverse">
                    <Promoted />
                </Flex>
            </Flex>
            <SideCopyRight />
        </Flex>
    )
}