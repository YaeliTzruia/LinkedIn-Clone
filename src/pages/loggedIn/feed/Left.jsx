import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import useAuth from "../../../hooks/useAuth";
import { colors } from "../../../themes/colors";

import arrowUp from "../../../assets/svg/arrowUp.svg"
import arrowDown from "../../../assets/svg/arrowDown.svg"
import premium from "../../../assets/svg/premium.svg"
import flag from "../../../assets/svg/my-items.svg"
import people from "../../../assets/svg/three-people.svg"
import { useState } from "react";

export default function Left() {
    const [vissible, setisVissible] = useState(false)

    const { profileImg, banner, userFullName, profession } = useAuth()
    return (
        <Flex gap="0.5rem" flexDir="column" w="14.063rem">
            <Flex flexDir="column" borderRadius="0.3rem" backgroundColor="white" w="14.063rem">
                <Flex h="11.514rem" borderBottom={colors.borderBottom} paddingBottom="1rem" flexDir="column">
                    <Flex align="center" justifyContent="center" w="100%" flexDir="column">
                        <Image borderTopRadius="0.3rem" h="3.516rem" w="100%" position="relative" alt="header image" src={banner} />
                        <Image marginTop="3.5rem" position="absolute" border="2px solid white" borderRadius="50%" w="4.5rem" h="4.5rem" alt="profile picture" src={profileImg} />

                    </Flex>
                    <Flex textAlign="center" justifyContent="center">
                        <Flex gap={1} flexDir="column" marginTop="3.5rem"  >
                            <Heading fontSize="1rem">{userFullName}</Heading>
                            <Text fontSize="0.875rem" color={colors.linkText}>{profession}</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex borderBottom={colors.borderBottom} color={colors.mediumGray} paddingY="0.9rem" flexDir="column" >
                    <Flex paddingTop="0.25rem" marginX="0.8rem" justifyContent="space-between" fontWeight={600} fontSize="0.75rem">
                        <Text>Who's viewed your profile</Text>
                        <Text color={colors.buttonSecondary}>100</Text>
                    </Flex>
                    <Flex paddingTop="0.25rem" marginX="0.8rem" justifyContent="space-between" fontWeight={600} fontSize="0.75rem">
                        <Text>Impressions of your posts</Text>
                        <Text color={colors.buttonSecondary}>56</Text>
                    </Flex>

                </Flex>
                <Flex maxH="2.613rem" borderBottom={colors.borderBottom} align="center" padding="0.75rem">
                    <Image marginRight="0.3rem" w="1rem" h="1rem" src={premium} alt="premium" />
                    <Text fontSize="0.75rem" fontWeight={600} color={colors.blackE6}>See your Premium features</Text>
                </Flex>
                <Flex maxH="2.613rem" borderBottom={colors.borderBottom} align="center" padding="0.75rem">
                    <Image className="navbar-images" marginRight="0.45rem" w="1rem" h="1rem" src={flag} alt="premium" />
                    <Text fontSize="0.75rem" fontWeight={600} color={colors.blackE6}>My items</Text>
                </Flex>
            </Flex>
            <Flex paddingLeft="0.75rem" flexDir="column" borderRadius="0.3rem" backgroundColor="white" w="14.063rem">
                <Flex justifyContent="space-between" align="center">
                    <Text onClick={() => {
                        setisVissible(prev => !prev)
                    }} cursor="pointer" w="90%" className="myDIV" paddingTop="0.30rem" fontSize="0.75rem">Recent</Text>
                    <Image className="navbar-images hide" alt="arrow" src={vissible ? arrowUp : arrowDown} />
                </Flex>
                {vissible &&
                    <Flex gap="0.3rem" paddingTop="0.55rem" flexDir="column">
                        <Flex w="14.063rem" maxH="2.613rem" align="center">
                            <Image className="navbar-images" marginRight="0.45rem" w="1rem" h="1rem" src={people} alt="premium" />
                            <Text fontSize="0.75rem" fontWeight={600} color={colors.linkText}>The ICF Community</Text>
                        </Flex>
                        <Flex w="14.063rem" maxH="2.613rem" align="center">
                            <Image className="navbar-images" marginRight="0.45rem" w="1rem" h="1rem" src={people} alt="premium" />
                            <Text fontSize="0.75rem" fontWeight={600} color={colors.linkText}>Premium Career Group</Text>
                        </Flex>

                    </Flex>
                }


            </Flex>
        </Flex>
    )
}