import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import slide1 from "../assets/slide1.png"
export default function AppSwipeCard({ src, text, title }) {


    return (

        <Flex class="swiper-slide" paddingLeft={["1rem", "1rem", "0", "0"]} flexDir={["column-reverse", "column-reverse", "row", "row"]} marginRight="6rem" marginTop="0.50rem" justifyContent="flex-end" w={["18.75rem", "18.75rem", "67.375rem", "67.375rem"]} >
            <Flex marginRight="4rem" justifyContent="center" align="center" w={["18.75rem", "18.75rem", "35.25rem", "35.25rem"]} flexDir="column">
                <Heading w={["18.75rem", "18.75rem", "35.25rem", "35.25rem"]} fontWeight={500} fontSize={["1.5rem", "1.5rem", "2.5rem", "2.5rem"]} color="#8f5849">{title}</Heading>
                <Text lineHeight="1.25" fontWeight={200} w={["18.75rem", "18.75rem", "34.381rem", "34.381rem"]} fontSize={["1.125rem", "1.125rem", "2rem", "2rem"]} marginY="0.5rem">
                    {text}
                </Text>
            </Flex>
            <Flex>
                <Image marginY={["1rem", "1rem", "0", "0"]} h={["18.75rem", "18.75rem", "28.125rem", "28.125rem"]} minW={["18.75rem", "18.75rem", "28.125rem", "28.125rem"]} alt="card image" src={src} />
            </Flex>
        </Flex>
    )
}



