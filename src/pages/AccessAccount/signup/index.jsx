
import { useMediaQuery } from "@chakra-ui/react";
import useFormikData from "../../../hooks/useFormik";
import Desktop from "./desktop/index";
import Phone from "./phone/index";



export default function Signup() {
    const { currentStep, setCurrentStep } = useFormikData()
    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");

    return (
        <>
            {isSmallScreen ? <Phone /> : <Desktop />}

        </>

    )
}