import { useState } from "react"

import profilePic from "../assets/profile-img.jpg"
import bannerImg from "../assets/linkedin-banner.jpeg"

export default function useAuth() {


    const [profileImg, setProfileImg] = useState(profilePic)
    const [banner, setBanner] = useState(bannerImg)
    const [userFullName, setUserFullName] = useState("Kesy Lottie")
    const [profession, setProfession] = useState("Software Developer")

    return {
        profileImg, setProfileImg, banner, setBanner, userFullName, setUserFullName, profession, setProfession
    }
}