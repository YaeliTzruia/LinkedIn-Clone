import { Flex, Divider, Center, Text } from "@chakra-ui/react";
import ShareBox from "./ShareBox";
import FeedBox from "./FeedBox";
import { colors } from "../../../../themes/colors";
import { useContext } from "react";
import { postContext } from "../../../../context/postContext";

export default function CenterPart() {

    // const dateRealTime = 2;
    const { feed, loadingPosts } = useContext(postContext)


    return (

        <Flex h="" flexDir="column">
            <Flex borderRadius="0.3rem" backgroundColor="white" w="33.75rem">
                <ShareBox />
            </Flex>
            <Flex marginY="1rem" borderBottom={`2px solid rgba(0,0,0,0.08)`} />
            <Flex marginBottom="5rem" gap={2.5} flexDir="column">
                {loadingPosts ? <>
                    <Text>Loading...</Text>
                </> :
                    <>
                        {feed.map((data) =>
                            <Flex key={data._id} flexDir="column" borderRadius="0.3rem" backgroundColor="white" w="33.75rem">

                                <FeedBox data={data} />

                            </Flex>
                        )}
                    </>}

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