import useSignup from "./useSignup"
import { SignupSchema } from "../schema/SignupSchema"
import { useFormik } from "formik"

export default function useFormikData() {
    const { createUser } = useSignup()

    const signupFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: SignupSchema,

        onSubmit: async (values) => {

            createUser(values)
        },
    })
    return { signupFormik }
}