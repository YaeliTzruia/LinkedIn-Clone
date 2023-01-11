import { Flex, Image } from "@chakra-ui/react";
import FirstBox from "./FirstBox";
import SecondBox from "./SecondBox";
import add from "../../../../assets/linkedin-add.png"


export default function ProfileRight() {



    // const btn = [
    //     { text: "Edit public profile & URL", icon: questionMark },
    //     { text: "Add profile in another language", icon: questionMark }
    // ]

    return (

        <Flex align="center" flexDir="column">
            <FirstBox />
            <SecondBox />
            <Flex paddingTop="0.5rem">
                <Image position="sticky" src={add} alt="linkedin add" />
            </Flex>

        </Flex>

    )
}

// this is the image when the scroll reaches the img
// position: fixed;
//     top: 0px;
    // right: 25.6rem