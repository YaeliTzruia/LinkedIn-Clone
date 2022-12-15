import { Flex, Heading, Text } from "@chakra-ui/react";
import AppTextIcon from "../../../../components/AppTextIcon"
import infoIcon from "../../../../assets/svg/info-icon.svg"
import microsoft from "../../../../assets/microsoft.jpeg"
import frontEndCafe from "../../../../assets/front-end-cafe.jpeg"
import taliaz from "../../../../assets/taliaz.jpeg"

export default function AddToFeed() {

    const follow = [
        { img: microsoft, title: "Microsoft", desc: "Company • Software Development" },
        { img: frontEndCafe, title: "Google", desc: "Company • Software Development" },
        { img: taliaz, title: "Taliaz", desc: "Company • Hospital & Health Care" },
    ]


    return (

        <Flex w="100%">
            <AppTextIcon cursor="pointer" marginLeft="9.1rem" justifyContent="space=between" className="navbar-images" h="1.5rem" padding="0" flexDir="row-reverse" src={infoIcon} text="Add to your feed" fontSize="1rem" fontWeight={700} />
            {follow.map(() =>
                <>
                </>
            )}
        </Flex>
    )
}