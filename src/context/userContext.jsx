import React, { createContext, useEffect, useState } from "react";
import profilePic from "../assets/profile-img.jpg"
import bannerImg from "../assets/linkedin-banner.jpeg"
import { authConfig } from "../config/auth.config";
import { useNavigate } from "react-router-dom";

export const userContext = createContext({})


export default function UserProvider({ children }) {
    const [userInformation, setUserInformation] = useState({})
    const [profileImg, setProfileImg] = useState(profilePic)
    const [banner, setBanner] = useState(bannerImg)
    const [header, setHeader] = useState("add a new header...")
    const [profession, setProfession] = useState("Software Developer")
    const [loading, setLoading] = useState(false)
    const [accessAccount, setAccessAcount] = useState(false)
    const navigate = useNavigate()
    const fullName = userInformation.firstName + " " + userInformation.lastName


    useEffect(() => {

        setLoading(true);

        const getUserDetails = async () => {
            const user = await authConfig.getUser();
            if (user.status === 200) {

                setUserInformation(user.data.signedInUser
                );


                setAccessAcount(true);
                // navigate("/feed")
            }
            // else if (user.status !== 200) {
            //     navigate("/")
            //     setAccessAcount(false);
            // }
            // console.log(user, "user deatials");
        };



        getUserDetails();
        setLoading(false);
    }, [accessAccount]);
    return (
        <userContext.Provider
            value={{
                userInformation, accessAccount,
                profileImg, banner, header,
                profession, setProfession, setBanner, setProfileImg, setLoading, loading, fullName
            }}
        >
            {children}
        </userContext.Provider>
    );
}

