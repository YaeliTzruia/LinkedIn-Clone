import { SignupSchema } from "../schema/SignupSchema"
import { useFormik } from "formik"
import useAuth from "./useAuth"
import { useContext, useState } from "react"
import { SetupSchema } from "../schema/SetupSchema"
import { SigninSchema } from "../schema/SigninSchema"
import { useNavigate } from "react-router-dom"
import { userContext } from "../context/userContext"
import bannerImg from "../assets/linkedin-banner.jpeg"
import defaultUserImg from "../assets/default user img.png"

export default function useFormikData() {
    const { setLoading } = useContext(userContext)
    const [currentStep, setCurrentStep] = useState(0)

    const { createUser, signinUser } = useAuth()
    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        firstName: '',
        middleName: '',
        lastName: '',
        birthday: '',
        country: '',
        city: '',
        address: '',
        headline: 'Add a new headline...',
        profileImg: defaultUserImg,
        headerImg: bannerImg,
        profession: '',
        industry: 'Add a new industry...',
        education: 'Add a new education...',
        userSummary: '',
        phone: '',
        phoneType: '',
        website: {
            websiteURL: '',
            websiteType: ''
        },
        link: '',
        linkText: '',
        posts: [
            {}
        ]

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
            console.log(values)
            await signinUser(values)
        }
    })


    return { signupData, handleNextStep, currentStep, signinFormik }
}