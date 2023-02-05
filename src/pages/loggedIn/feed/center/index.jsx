import { Flex, Divider, Center } from "@chakra-ui/react";
import ShareBox from "./ShareBox";
import FeedBox from "./FeedBox";
import { colors } from "../../../../themes/colors";

export default function CenterPart() {

    const dateRealTime = 2;

    const posts = [
        {
            user: "Anna", text: "I remember when the behavior for placeholder text on inputs and textareas made that subtle functionality change in WebKit where the text would remain in place until you started typing rather than disappear on focus of the empty input. I think it may have been first on iOS actually, but now both stable Chrome and Safari do this.", time: dateRealTime, id: "1sdr"
        },
        {
            user: "Karin", text: "No milk!", time: dateRealTime, id: "dsap2"
        },
        {
            user: "Karin", text: "No milk!", time: dateRealTime, id: "dsap2"
        }
    ]

    return (

        <Flex h="" flexDir="column">
            <Flex borderRadius="0.3rem" backgroundColor="white" w="33.75rem">
                <ShareBox />
            </Flex>
            <Flex marginY="1rem" borderBottom={`2px solid rgba(0,0,0,0.08)`} />
            <Flex marginBottom="5rem" gap={2.5} flexDir="column">

                {posts.map((data) =>
                    <Flex key={data.id} flexDir="column" borderRadius="0.3rem" backgroundColor="white" w="33.75rem">

                        <FeedBox data={data} />

                    </Flex>
                )}
                {/* <Flex flexDir="column" borderRadius="0.3rem" backgroundColor="white" w="33.75rem">

                    <FeedBox />

                </Flex>
                <Flex flexDir="column" borderRadius="0.3rem" backgroundColor="white" w="33.75rem">

                    <FeedBox />

                </Flex> */}

            </Flex>

        </Flex>

    )
}