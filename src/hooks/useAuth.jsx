import axios from "axios";
import { SignupSchema } from "../schema/SignupSchema";
import useInputs from "./useInputs"
import { useContext, useEffect, useState } from "react";
import { authConfig } from "../config/auth.config";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";

export default function useAuth() {
    // const { setLoading, setAccessAcount } = useContext(userContext)
    axios.defaults.withCredentials = true;
    const navigate = useNavigate()


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
        if (res?.status !== 200) {
            return res?.response?.data?.msg
        } else {
            return res
        }
    }

    const signout = async () => {
        try {
            const logout = await authConfig.handleLogout()
            navigate("/")
            return logout
        } catch (error) {
            console.error('failed signout', error)
            return error
        }
    }

    const updateUserInformation = async () => {
        try {
            const update = await authConfig.updateUser()
            return update
        } catch (error) {
            return error
        }
    }

    return {
        createUser, signout, signinUser, updateUserInformation,
    }
}