import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, InputLeftElement, textDecoration, Flex } from "@chakra-ui/react";
import { useReducer } from "react";
import { colors } from "../themes/colors";

export default function AppInputField({ isPassword = false, type, border, lable, placeholder, buttonW, buttonH, inputRef, isInvalid, btnHight, ...props }) {

    const [show, setShow] = useReducer(show => !show, false)

    return (
        <FormControl isInvalid={isInvalid}>
            <FormLabel marginBottom="0.25rem" fontSize="0.875rem" color="rgba(0,0,0,0.6)">{lable}</FormLabel>
            <InputGroup size='md'>
                {isPassword ?
                    <Flex align="center">
                        <Input _hover={{ borderColor: { border } }} borderColor={border} autoComplete="off" placeholder={placeholder} {...props} type={show ? "text" : "password"} />
                        <InputLeftElement paddingRight="0.625rem" width={buttonW}>
                            <Button fontWeight={400} h={btnHight} paddingLeft="0.625rem" _active={{ backgroundColor: "transparent" }} _hover={{ backgroundColor: "transparent", textDecoration: "underline" }} backgroundColor="transparent" color={colors.linkText} size='sm' onClick={setShow}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputLeftElement>
                    </Flex>
                    :
                    <Input borderColor={border} _hover={{ borderColor: { border } }} autoComplete="off" placeholder={placeholder} {...props} type={type} />
                }
            </InputGroup>
        </FormControl>
    )
}