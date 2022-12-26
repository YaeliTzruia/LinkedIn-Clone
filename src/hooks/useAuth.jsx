import axios from "axios";
import { SignupSchema } from "../schema/SignupSchema";
import useInputs from "./useInputs"
import { useState } from "react";
import { authConfig } from "../config/auth.config";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
    const [loading, setLoading] = useState(false)
    const [accessAccount, setAccessAcount] = useState(false)
    const navigate = useNavigate()


    const createUser = async (values) => {
        try {
            console.log(values, "values")

            const res = await authConfig.handleRegistration(values)
            return res;
        } catch (err) {
            console.log(err)
            return err
        }
    }


    const signinUser = async (values) => {
        setLoading(true)
        const res = await authConfig.handleLogin(values)
        if (res?.data?.status !== "success") {
            console.log(res?.response?.data?.msg, " - error message")
            setLoading(false)
            setAccessAcount(false)
            return res?.response?.data?.msg
        }

        console.log(res, "signin success")
        setLoading(false)
        setAccessAcount(true)
        navigate("/feed")
        return res




    }


    return {
        createUser, signinUser, accessAccount, loading
    }
}