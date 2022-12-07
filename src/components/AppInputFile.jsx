import { Button, Flex, Image, Input, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "../themes/colors";

export default function AppInputField({ isPassword = false, text, icon, ...otherProps }) {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Flex align="center" {...otherProps} >
            <Input border="none" placeholder={text} />
            {isPassword && <Button h="2rem" borderRadius="0.2rem" color="rgba(0,0,0,0.6)" _hover={{ color: "#000000", backgroundColor: "#EFEFEF" }} backgroundColor="transparent" marginRight="0.5rem" paddingX="0.5rem" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}</Button>}
        </Flex>
    )
}