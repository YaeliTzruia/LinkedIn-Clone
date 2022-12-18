import { Flex, Divider } from "@chakra-ui/react";
import ShareBox from "./ShareBox";
import FeedBox from "./FeedBox";
import { colors } from "../../../../themes/colors";

export default function Center() {


    return (

        <Flex h="" flexDir="column">
            <Flex borderRadius="0.3rem" backgroundColor="white" w="33.75rem">
                <ShareBox />
            </Flex>
            <Center margin="0.5rem" w="27.628rem" orientation='horizontal' >
                <Divider color="black" />
            </Center>

            <Flex borderRadius="0.3rem" backgroundColor="white" w="33.75rem">

                <FeedBox />
            </Flex>

        </Flex>

    )
}