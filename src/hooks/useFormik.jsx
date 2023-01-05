import { SignupSchema } from "../schema/SignupSchema"
import { useFormik } from "formik"
import useAuth from "./useAuth"
import { useState } from "react"
import { SetupSchema } from "../schema/SetupSchema"
import { SigninSchema } from "../schema/SigninSchema"

export default function useFormikData() {
    const [currentStep, setCurrentStep] = useState(0)
    const { createUser, signinUser } = useAuth()
    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })




    const handleNextStep = (values, final = false) => {
        setSignupData((prev) => ({ ...prev, ...values }));
        console.log(values, "values");

        if (final) {
            createUser(values)
            return;
        }
        setCurrentStep((prev) => prev + 1);
        console.log(currentStep)
    };

    const signupFormik = useFormik({
        initialValues: signupData,
        validationSchema: SignupSchema,

        onSubmit: async (values) => {
            console.log(values, "values")
            // handleNextStep(values)
        }

    })

    const signinFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: SigninSchema,

        onSubmit: async (values) => {
            signinUser(values)
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

    return { signupFormik, handleNextStep, signinFormik, AddProfileDataFormik, currentStep, setCurrentStep }
}