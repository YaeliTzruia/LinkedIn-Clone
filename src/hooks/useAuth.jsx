import axios from "axios";

import { authConfig } from "../config/auth.config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/userContext";

export default function useAuth() {
    axios.defaults.withCredentials = true;
    const { setLoading } = useContext(userContext)
    const navigate = useNavigate()

    // useEffect(()=>{

    // })

    const createUser = async (values) => {
        try {

            const res = await authConfig.handleRegistration(values)
            return res;
        } catch (err) {
            console.log(err)
            return err
        }
    }


    const signinUser = async (values) => {
        const res = await authConfig.handleLogin(values)
        console.log(res, "res")
        if (res?.status !== 200) {

            return res?.response?.data?.msg

        } else {
            return res
        }
    }

    const signout = async () => {
        try {
            setLoading(true)
            const logout = await authConfig.handleLogout()
            setLoading(false)
            // navigate("/")
            return logout
        } catch (error) {
            console.error('failed signout', error)
            return error
        }
    }

    const updateUserInformation = async (values) => {
        try {
            const update = await authConfig.updateUser(values)
            return update
        } catch (error) {
            return error
        }
    }

    return {
        createUser, signout, signinUser, updateUserInformation,
    }
}