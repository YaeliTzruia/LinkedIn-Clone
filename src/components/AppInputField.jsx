import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, InputLeftElement, textDecoration } from "@chakra-ui/react";
import { useReducer } from "react";
import { colors } from "../themes/colors";

export default function AppInputField({ isPassword = false, type, lable, placeholder, buttonW, buttonH, inputRef, ...props }) {

    const [show, setShow] = useReducer(show => !show, false)

    return (
        <FormControl>
            <FormLabel>{lable}</FormLabel>
            <InputGroup size='md'>
                {isPassword ?
                    <>  <Input autoComplete="off" placeholder={placeholder} {...props} type={show ? "text" : "password"} />
                        <InputLeftElement paddingRight="0.625rem" width={buttonW}>
                            <Button paddingLeft="0.625rem" _active={{ backgroundColor: "transparent" }} _hover={{ backgroundColor: "transparent", textDecoration: "underline" }} backgroundColor="transparent" color={colors.linkText} h={buttonH} size='sm' onClick={setShow}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputLeftElement>
                    </>
                    :
                    <Input autoComplete="off" placeholder={placeholder} {...props} type={type} />
                }
            </InputGroup>
        </FormControl>
    )
}