import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { userContext } from "../../../../context/userContext";
import { colors } from "../../../../themes/colors";
import edit from "../../../../assets/svg/profile/edit-pen.svg"

import AppButton from "../../../../components/AppButton";
import EditInfoModal from "../modal/user-information/EditInfoModal";

import EditProfileImageModal from "../modal/EditImageModal";
import ProfileImages from "./ProfileImages";
import ProfileSummaryText from "./ProfileSummaryText";


export default function ProfileSummary({ isOpen, onOpen, onClose }) {
    const { userInformation, headline, profileImg, banner, profession, fullName, getUserDetails, link, linkText } = useContext(userContext)
    const ref1 = useRef()
    const ref2 = useRef()
    // const [displayLink, setDisplayLink] = useState()
    const [editData, setEditData] = useState({})


    return (

        <Flex flexDir="column" border={`0.5px solid ${colors.border}`} borderRadius="0.5rem" backgroundColor={colors.white} paddingBottom="1.5rem" w="48.875rem" >
            <ProfileImages getUserDetails={getUserDetails} userInformation={userInformation} profileImg={profileImg} banner={banner} />

            <ProfileSummaryText getUserDetails={getUserDetails} userInformation={userInformation} headline={headline} fullName={fullName} link={link} linkText={linkText} />



        </Flex >
    )
}