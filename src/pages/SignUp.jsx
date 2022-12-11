import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import CopyRight from "../misc/footer/CopyRight";
import { colors } from "../themes/colors";
import logo from "../assets/Linkedin-logo-png2.png"
import useInputs from "../hooks/useInputs"
import AppInputField from "../components/AppInputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { SignupSchema } from "../schema/SignupSchema";
import { useEffect } from "react";


export default function SignUp() {
    // const { register, handleSubmit, errors } = useForm(
    //     //     {
    //     //     resolver: yupResolver(SignupSchema)
    //     // }
    // );

    const [passwordProps, setPasswordProps] = useInputs("")
    const [emailProps, setEmailProps] = useInputs("")

    const createUser = async (e) => {
        e.preventDefault()
        let formData = {
            email: e.target[0].value,
            password: e.target[1].value,
        }
        const isValid = await SignupSchema.validate(formData, { abortEarly: false }).then(function () {

            setPasswordProps("")
            setEmailProps("")
            return console.log(emailProps, "emailProps", passwordProps, "passwordProps")
        }).catch(function (err) {
            return err.inner.forEach(e => {
                console.log(e.message, e.path)
            })

        })
    }



    return (
        <Flex flexDir=" column" justifyContent="center" w="100%" backgroundColor={colors.background}>
            <Flex flexDir=" column" alignItems="center" w="100%" h="64.85rem">
                < Flex paddingTop="1.5rem" w={["100%", "100%", "70.5rem", "70.5rem"]} >
                    <Image w="8.438rem" h="2.109rem" src={logo} alt="LinkedIn logo name" />
                </Flex >
                <Heading fontWeight={400} paddingY="1.5rem" paddingX="1rem" fontSize="2rem">Make the most of your professional life</Heading>
                <Flex flexDir="column" borderRadius="0.5rem" padding="1.5rem" w="25rem" h="26.994rem" backgroundColor="white">
                    <form onSubmit={createUser}>

                        <AppInputField {...emailProps} lable="Email" type="email" />

                        <AppInputField
                            {...passwordProps} lable="Password (6 or more characters)" isPassword={true} />

                        <Button type="submit">submit</Button>
                    </form>
                </Flex>
            </Flex>
            <Flex h="3.125rem" backgroundColor="white">
                <CopyRight />
            </Flex>
        </Flex >
    )
}