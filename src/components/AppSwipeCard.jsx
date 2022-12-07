import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import slide1 from "../assets/slide1.png"
export default function AppSwipeCard({ src, text, title }) {


    return (

        <Flex marginRight="3rem" marginTop="0.50rem" justifyContent="flex-end" w="67.375rem" h="28.186rem">
            <Flex marginRight="4rem" justifyContent="center" align="center" w="35.25rem" flexDir="column">
                <Heading w="35.25rem" fontWeight={500} fontSize="2.5rem" color="#8f5849">{title}</Heading>
                <Text lineHeight="1.25" fontWeight={200} w="34.381rem" fontSize="2rem" marginY="0.5rem">
                    {text}
                </Text>
            </Flex>
            <Flex>
                <Image w="28.125rem" alt="card image" src={src} />
            </Flex>
        </Flex>
    )
}



