import React, { createContext, useEffect, useState } from "react";
import profilePic from "../assets/profile-img.jpg"
import bannerImg from "../assets/linkedin-banner.jpeg"
import { authConfig } from "../config/auth.config";
import { useNavigate } from "react-router-dom";

export const userContext = createContext({})


export default function UserProvider({ children }) {
    const [userInformation, setUserInformation] = useState({})
    const [loading, setLoading] = useState(false)
    const [accessAccount, setAccessAcount] = useState(false)

    const { profileImg, profession, headline, link, linkText } = userInformation
    const fullName = userInformation.firstName + " " + userInformation.middleName + " " + userInformation.lastName

    const banner = userInformation.headerImg

    const getUserDetails = async () => {
        const user = await authConfig.getUser();
        if (user.status === 200) {

            setUserInformation(user.data.signedInUser
            );


            setAccessAcount(true);

        }

    };
    useEffect(() => {

        setLoading(true);


        getUserDetails();
        setLoading(false);
    }, [accessAccount, loading]);
    return (
        <userContext.Provider
            value={{
                getUserDetails, link, linkText,
                userInformation, accessAccount,
                profileImg, banner, headline,
                profession, setLoading, loading, fullName
            }}
        >
            {children}
        </userContext.Provider>
    );
}

