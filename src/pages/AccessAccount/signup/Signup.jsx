
import { useMediaQuery } from "@chakra-ui/react";
import Desktop from "./desktop";
import Phone from "./phone";


export default function Signup() {

    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");

    return (
        <>
            {isSmallScreen ? <Phone /> : <Desktop />}

        </>

    )
}