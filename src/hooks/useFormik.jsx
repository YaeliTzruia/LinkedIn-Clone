import { SignupSchema } from "../schema/SignupSchema"
import { useFormik } from "formik"
import useAuth from "./useAuth"

export default function useFormikData() {

    const { createUser, signinUser } = useAuth()

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

    const signinFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: SignupSchema,

        onSubmit: async (values) => {

            signinUser(values)
        },
    })

    return { signupFormik, signinFormik }
}