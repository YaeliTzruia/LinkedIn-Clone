import axios from "axios";
import { SignupSchema } from "../schema/SignupSchema";
import useInputs from "./useInputs"
import { useEffect, useState } from "react";
import { authConfig } from "../config/auth.config";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
    axios.defaults.withCredentials = true;
    const [loading, setLoading] = useState(false)
    const [accessAccount, setAccessAcount] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        getCurrentUser()
        setLoading(false)
    }, [loading])


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
        if (res?.status !== 200) {
            setLoading(false)
            setAccessAcount(false)
            return res?.response?.data?.msg
        } else {
            setAccessAcount(true)
            navigate("/feed")
            setLoading(false)
            return res
        }
    }

    const getCurrentUser = async () => {
        try {
            const currentUser = await authConfig.getCurrentUser()
            console.log(currentUser, "currentUser")
            if (currentUser.status === 200) {
                console.log(currentUser.data);
                setAccessAcount(true);
                return currentUser
            }

        } catch (error) {
            console.error('failed getting user details', error)
            return error
        }
    }

    const signout = async () => {
        try {
            const logout = await authConfig.handleLogout()
            return logout
        } catch (error) {
            console.error('failed signout', error)
            return error
        }
    }

    return {
        createUser, signout, signinUser, getCurrentUser, accessAccount, loading, setLoading
    }
}