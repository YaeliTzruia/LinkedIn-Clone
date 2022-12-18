import { Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { AddIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import AppTextIcon from "../../../../components/AppTextIcon"
import infoIcon from "../../../../assets/svg/info-icon.svg"
import microsoft from "../../../../assets/microsoft.jpeg"
import frontEndCafe from "../../../../assets/front-end-cafe.jpeg"
import taliaz from "../../../../assets/taliaz.jpeg"
import { colors } from "../../../../themes/colors"


export default function AddToFeed() {

    const follow = [
        { img: microsoft, title: "Microsoft", desc: "Company • Software Development" },
        { img: frontEndCafe, title: "Google", desc: "Company • Software Development" },
        { img: taliaz, title: "Taliaz", desc: "Company • Hospital & Health Care" },
    ]


    return (

        <Flex flexDir="column" w="100%">
            <Flex marginBottom="0.75rem" >
                <AppTextIcon cursor="pointer" marginLeft="9.1rem" justifyContent="space=between" className="navbar-images" h="1.5rem" padding="0" flexDir="row-reverse" src={infoIcon} text="Add to your feed" fontSize="1rem" fontWeight={700} />
            </Flex>
            {follow.map((data) =>
                <Flex marginBottom="0.75rem" h="4.75rem" w="18.188rem" key={data.title + data.desc}>
                    <Image marginRight="0.8rem" borderRadius="20" w="3rem" h="3rem" alt={data.title} src={data.img} />
                    <Flex h="4.75rem" justifyContent="space-between" align="flex-start" flexDir="column">
                        <Text lineHeight="1.5" fontWeight={700} fontSize="0.875rem" >{data.title}</Text>
                        <Text lineHeight="1.5" fontSize="0.75rem" color={colors.linkText}>{data.desc}</Text>
                        <Button leftIcon={<AddIcon w="0.75rem" h="0.75rem" />} color={colors.linkText} h="2rem" w="6.172rem" border={`0.5px solid ${colors.linkText} `} borderRadius="20" variant="ghost">Follow</Button>
                    </Flex>
                </Flex>
            )}
            <Flex padding="0.125rem 0.5rem" color="rgba(0,0,0,0.6)" fontSize="0.875rem" fontWeight={600} align="center" w="100%"><Text color="rgba(0,0,0,0.6)" >View all recommendations</Text><ArrowForwardIcon paddingTop="0.1rem" w="1rem" h="1rem" /></Flex>

        </Flex>
    )
}