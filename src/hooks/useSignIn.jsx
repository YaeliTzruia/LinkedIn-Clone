import { SignupSchema } from "../schema/SignupSchema";
import useInputs from "../hooks/useInputs"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useSignIn() {

    const [passwordProps, setPasswordProps] = useInputs("")
    const [emailProps, setEmailProps] = useInputs("")
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const loginUser = async (e) => {

        navigate("/feed")
        // e.preventDefault()
        // let formData = {
        //     email: e.target[0].value,
        //     password: e.target[1].value,
        // }
        // const isValid = await SignupSchema.validate(formData, { abortEarly: false }).then(function () {
        //     setError(false)
        //     setPasswordProps("")
        //     setEmailProps("")

        //     return console.log(emailProps, "emailProps", passwordProps, "passwordProps")

        // }).catch(function (err) {

        //     console.log(error)
        //     const errs = err.inner.forEach(
        //         err.inner.flatMap((e) => ({ [e.path]: e.errors }))

        //     );
        //     setError(errs)
        //     console.log(error)
        // })
    }

    return {
        loginUser, passwordProps, emailProps, error
    }
}