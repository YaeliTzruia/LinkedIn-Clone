import { Flex } from "@chakra-ui/react";
import FirstBox from "./FirstBox";
import SecondBox from "./SecondBox";


export default function ProfileRight() {

    // const btn = [
    //     { text: "Edit public profile & URL", icon: questionMark },
    //     { text: "Add profile in another language", icon: questionMark }
    // ]

    return (

        <Flex flexDir="column">
            <FirstBox />
            <SecondBox />
        </Flex>

    )
}