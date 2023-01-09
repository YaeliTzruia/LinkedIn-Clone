
import { useMediaQuery } from "@chakra-ui/react";
import useFormikData from "../../../hooks/useFormik";
import Desktop from "./desktop/index";
import Phone from "./phone/index";
import FirstStep from "./desktop/steps/1-First";
import SecondStep from "./desktop/steps/2-Second";
import Welcome from "./desktop/steps/Welcome";



export default function Signup() {
    const { currentStep, handleNextStep, signupData } = useFormikData()
    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");
    const desktopIndex = [
        <FirstStep data={signupData} handleNextStep={handleNextStep} />,
        <SecondStep data={signupData} handleNextStep={handleNextStep} />,
        <Welcome data={signupData} handleNextStep={handleNextStep} />]

    return (
        <>
            {isSmallScreen ? <Phone /> : <Desktop content={desktopIndex[currentStep]} />}

        </>

    )
}