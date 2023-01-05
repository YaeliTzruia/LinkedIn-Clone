import { useEffect, useState } from "react"

import profilePic from "../assets/profile-img.jpg"
import bannerImg from "../assets/linkedin-banner.jpeg"
import useAuth from "./useAuth"

export default function useUserInfo() {



    const [profileImg, setProfileImg] = useState(profilePic)
    const [banner, setBanner] = useState(bannerImg)
    const [userFullName, setUserFullName] = useState("sara")
    const [profession, setProfession] = useState("Software Developer")

    const { setLoading, getCurrentUser } = useAuth()



    return {
        profileImg, setProfileImg, banner, setBanner, userFullName, setUserFullName, profession, setProfession
    }
}