import { Flex, Divider, Center } from "@chakra-ui/react";
import ShareBox from "./ShareBox";
import FeedBox from "./FeedBox";
import { colors } from "../../../../themes/colors";

export default function CenterPart() {


    return (

        <Flex h="" flexDir="column">
            <Flex borderRadius="0.3rem" backgroundColor="white" w="33.75rem">
                <ShareBox />
            </Flex>
            <Flex marginY="1rem" borderBottom={`2px solid rgba(0,0,0,0.08)`} />
            <Flex marginBottom="5rem" gap={2.5} flexDir="column">

                <Flex flexDir="column" borderRadius="0.3rem" backgroundColor="white" w="33.75rem">

                    <FeedBox />

                </Flex>
                <Flex flexDir="column" borderRadius="0.3rem" backgroundColor="white" w="33.75rem">

                    <FeedBox />

                </Flex>

            </Flex>

        </Flex>

    )
}