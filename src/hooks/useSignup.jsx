import axios from "axios";
import { SignupSchema } from "../schema/SignupSchema";
import useInputs from "../hooks/useInputs"
import { useState } from "react";

export default function useSignup() {

    const [passwordProps, setPasswordProps] = useInputs("")
    const [emailProps, setEmailProps] = useInputs("")
    const [error, setError] = useState(false)

    const createUser = async (values) => {
        // e.preventDefault()
        //  isValid = await SignupSchema.validate(formData, { abortEarly: false }).then(function () {
        //     setError(false)
        //     setPasswordProps("")
        //     setEmailProps("")
        //     return console.log(formData, "formData")

        // }).catch(function (err) {

        //     console.log(error)
        //     const errs = err.inner.forEach(
        //         err.inner.flatMap((e) => ({ [e.path]: e.errors }))

        //     );
        //     setError(errs)
        //     console.log(error)
        // })

        try {
            console.log("lalalal")
            console.log(values, "values")

            // const res = axios.post("http://localhost:5001/auth/signup", formData)
            // return res;
        } catch (err) {
            console.log(err)
            return err
        }
    }


    return {
        createUser, passwordProps, emailProps, error
    }
}