import { SignupSchema } from "../schema/SignupSchema"
import { useFormik } from "formik"
import useAuth from "./useAuth"
import { useState } from "react"
import { SetupSchema } from "../schema/SetupSchema"

export default function useFormikData() {
    const [currentStep, setCurrentStep] = useState(0)

    const { createUser, signinUser } = useAuth()

    const signupFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
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
            console.log(values, "values")
            // signinUser(values)
        }
    })
    const AddProfileDataFormik = useFormik({
        initialValues: {
            country: '',
            city: '',

        },
        validationSchema: SetupSchema,

        onSubmit: async (values) => {
            console.log(values, "values")
            // signinUser(values)
        },
    })

    return { signupFormik, signinFormik, AddProfileDataFormik, currentStep, setCurrentStep }
}