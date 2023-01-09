import { SignupSchema } from "../schema/SignupSchema"
import { useFormik } from "formik"
import useAuth from "./useAuth"
import { useContext, useState } from "react"
import { SetupSchema } from "../schema/SetupSchema"
import { SigninSchema } from "../schema/SigninSchema"
import { useNavigate } from "react-router-dom"
import { userContext } from "../context/userContext"

export default function useFormikData() {
    const { setLoading } = useContext(userContext)
    const [currentStep, setCurrentStep] = useState(0)

    const { createUser, signinUser } = useAuth()
    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        country: '',
        city: ''
    })

    const navigate = useNavigate()



    const handleNextStep = async (values, final = false) => {
        setSignupData((prev) => ({ ...prev, ...values }));
        console.log(values, "values");

        if (final) {
            setLoading(true)
            await createUser(values)
            setLoading(false)
            navigate("/feed")

            return;
        }
        setCurrentStep((prev) => prev + 1);
        console.log(currentStep)
    };



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


    return { signupData, handleNextStep, currentStep }
}