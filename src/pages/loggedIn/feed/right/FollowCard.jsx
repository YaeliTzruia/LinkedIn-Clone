import { Flex } from "@chakra-ui/react";
import AddToFeed from "./AddToFeed";
import FollowField from "./FollowField";

export default function FollowCard({ ...props }) {



    return (
        <Flex flexDir="column" padding="0.75rem" {...props} textAlign="center" overflow="hidden" marginBottom="0.5rem" borderRadius="0.313rem" position="relative" border="none" boxShadow="0 0 0 1px rgb(000/15%),000 rbg(0 0 0 /20%)">
            <Flex flexDir="row-reverse">
                <AddToFeed />
            </Flex>
            <FollowField />
        </Flex>
    )
}