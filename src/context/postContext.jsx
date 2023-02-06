import React, { createContext, useEffect, useState } from "react";
import profilePic from "../assets/profile-img.jpg"
import bannerImg from "../assets/linkedin-banner.jpeg"
import { authConfig } from "../config/auth.config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./userContext";
import axios from "axios";

export const postContext = createContext({})


export default function PostProvider({ children }) {
    // const [userInformation, setUserInformation] = useState({})
    const [loadingPosts, setLoadingPosts] = useState(false)
    const { userInformation, accessAccount } = useContext(userContext)
    const [feed, setFeed] = useState([])

    // const { profileImg, profession, headline, link, linkText } = userInformation
    const fullName = userInformation.firstName + " " + userInformation.middleName + " " + userInformation.lastName

    const userId = userInformation.id


    const getPosts = async () => {
        setLoadingPosts(true)
        const postArray = await axios.get(`http://localhost:5001/posts/${userId}`)
        console.log(postArray)
        if (postArray.status === 200) {
            setFeed(postArray.data.post)
            setLoadingPosts(false)
        }
    }
    const AddNewPost = async (text, image) => {
        const values = { text: text, userId: userId, userFullName: fullName, image: image }
        const newPost = await axios.get(`http://localhost:5001/posts/addpost`, values)
        if (newPost.status === 200) {
            setFeed(...feed, newPost.data.post)
            setLoadingPosts(false)
        }
    }
    // };
    useEffect(() => {
        if (accessAccount === true) {
            setLoadingPosts(true);
            getPosts()

            setLoadingPosts(false);
        }

    }, [accessAccount]);
    return (
        <postContext.Provider
            value={{
                loadingPosts, setLoadingPosts, feed, AddNewPost
            }}
        >
            {children}
        </postContext.Provider>
    );
}

