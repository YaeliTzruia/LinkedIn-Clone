import { Flex, Image, Text } from "@chakra-ui/react";
import AppTextIcon from "../../../../components/AppTextIcon";
import { BsThreeDots } from "react-icons/bs";
import wordpress from "../../../../assets/wordpress.jpeg"
import hebrewAdd from "../../../../assets/hebrewAdd.jpeg"
import confidence from "../../../../assets/writeConfident.jpeg"
import arrow from "../../../../assets/svg/add-arrow-right.svg"
import { colors } from "../../../../themes/colors";


export default function Promoted() {

    const promote = [
        { img: wordpress, title: "WordPress from SiteGround", desc: "Get the fastest & most secure WordPress hosting - now from $2.99/mo." },
        { img: hebrewAdd, title: "מתכנתי על לצוות שלכם", desc: "לכם יש יעדים, לנו יש את הכשרונות בשביל להביא אותם לחיים." },
        { img: confidence, title: " Write More Effectively ", desc: "Grammarly helps you write better in Apple Mail and beyond. Install now!" },
    ]

    return (
        <Flex flexDir="column" w="100%" >
            <Flex justifyContent="space-between" w="100%" align="center" >
                <Text color="rgba(0,0,0,0.85)" cursor="pointer" justifyContent="space=between" h="1.5rem" padding="0" flexDir="row-reverse" fontSize="1rem" fontWeight={500} >Promoted</Text>
                <BsThreeDots />
            </Flex>
            <Flex flexDir="column">
                {promote.map((data) =>
                    <Flex cursor="pointer" align="center" marginTop="0.25rem" textAlign="left" lineHeight="1.05rem" w="18.75rem" h="4.438rem" key={data.title}>
                        <Image marginRight="0.5rem" w="3.25rem" h="3.25rem" alt={data.title} src={data.img} />
                        <Flex flexDir="column">
                            <Text _hover={{ textDecor: "underline", color: colors.buttonSecondary }} fontSize="0.875rem">{data.title}</Text>
                            <Text fontSize="0.75rem">{data.desc}</Text>
                        </Flex>
                        <Image h="1.4rem" alt="arrow right" src={arrow} />
                    </Flex>
                )}

            </Flex>

        </Flex>


    )
}