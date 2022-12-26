import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, InputLeftElement, textDecoration, Flex, Image } from "@chakra-ui/react";
import { useReducer } from "react";
import { colors } from "../themes/colors";

export default function AppInputField({ isLogin = false, variant, labelMarginTop = "0", labelColor = "rgba(0, 0, 0, 0.6)", btnBox = "false", isPassword = false, type, border, label, placeholder, buttonW, buttonH, inputRef, isInvalid, btnHight, btnMargin = "0.7rem", borderRadius = "50rem", ...props }) {

    const [show, setShow] = useReducer(show => !show, false)

    return (
        <FormControl marginTop={labelMarginTop} variant={variant} isInvalid={isInvalid}>
            {!isLogin && <FormLabel marginBottom="0.25rem" fontSize="0.875rem" color={labelColor}>{label}</FormLabel>}
            < InputGroup size='md' >
                {
                    isPassword ?
                        <Flex w="100%" justifyContent="center" align="center">
                            < Input _hover={{ borderColor: { border } }
                            } borderColor={border} autoComplete="off" placeholder=' ' {...props} type={show ? "text" : "password"} />
                            {isLogin && <FormLabel marginBottom="0.25rem" fontSize="0.875rem" color={labelColor}>{label}</FormLabel>}
                            <InputLeftElement paddingRight={["0.625rem", "2.5rem", "0.625rem", "0.625rem"]} width={buttonW}>
                                {btnBox ?
                                    <Button backgroundColor="transparent" borderRadius={borderRadius} display="flex" align="center" textDecor="none" marginTop={btnMargin} fontWeight={700} h={btnHight} marginRight="1rem" paddingY="0.5rem" paddingX={["1.7rem", "0.5rem", "1.7rem", "1.7rem"]} color={colors.buttonSecondary} zIndex={2} size='sm' onClick={setShow}>
                                        {show ? 'hide' : 'show'}
                                        {/* paddingLeft="0.625rem" */}
                                    </Button>
                                    :
                                    <Button fontWeight={400} h={btnHight} _active={{ backgroundColor: "transparent" }} _hover={{ backgroundColor: "transparent", textDecoration: "underline" }} backgroundColor="transparent" color={colors.linkText} size='sm' marginBottom="0.5rem" onClick={setShow}>
                                        {show ? 'Hide' : 'Show'}
                                        {/* paddingLeft="0.625rem" */}
                                    </Button>
                                }


                            </InputLeftElement>
                        </Flex >
                        :
                        <Flex w="100%" justifyContent="center" align="center">
                            <Input borderColor={border} _hover={{ borderColor: { border } }} autoComplete="off" placeholder=" " {...props} type={type} />
                            {isLogin && <FormLabel marginBottom="0.25rem" fontSize="0.875rem" color={labelColor}>{label}</FormLabel>}
                        </Flex>
                }

            </InputGroup >

        </FormControl >
    )
}