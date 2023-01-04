import { Flex } from "@chakra-ui/react";


import { colors } from "../../../../themes/colors";
import useFormikData from "../../../../hooks/useFormik";
import FirstStep from "./steps/1-First";
import SecondStep from "./steps/2-Second";
import Welcome from "./steps/Welcome";



export default function Desktop({ content }) {



    return (
        <>

            {/* <FirstStep /> */}
            {/* <SecondStep /> */}
            <Welcome />


        </>
    )
}