import { Button, color, Flex, Heading, Image, Text } from "@chakra-ui/react";
import useAuth from "../../../hooks/useAuth";
import { colors } from "../../../themes/colors";
import arrowUp from "../../../assets/svg/arrowUp.svg"
import arrowDown from "../../../assets/svg/arrowDown.svg"
import premium from "../../../assets/svg/premium.svg"
import flag from "../../../assets/svg/my-items.svg"
import people from "../../../assets/svg/three-people.svg"
import { useReducer, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

export default function Left() {
    const [vissible, setisVissible] = useReducer((prev) => !prev, true)
    const [vissibleG, setisVissibleG] = useReducer((prev) => !prev, true)

    const { profileImg, banner, userFullName, profession } = useAuth()
    return (
        <Flex gap="0.5rem" flexDir="column" w="14.063rem">
            <Flex flexDir="column" borderRadius="0.3rem" bg="white" w="14.063rem">
                <Flex h="11.514rem" borderBottom={colors.borderBottom} paddingBottom="1rem" flexDir="column">
                    <Flex align="center" justifyContent="center" w="100%" flexDir="column">
                        <Image borderTopRadius="0.3rem" h="3.516rem" w="100%" position="relative" alt="header image" src={banner} />
                        <Image marginTop="3.5rem" position="absolute" border="2px solid white" borderRadius="50%" w="4.5rem" h="4.5rem" alt="profile picture" src={profileImg} />

                    </Flex>
                    <Flex textAlign="center" justifyContent="center">
                        <Flex gap={1} flexDir="column" marginTop="3.5rem"  >
                            <Heading cursor="pointer" _hover={{ textDecor: "1px underline" }} fontSize="1rem">{userFullName}</Heading>
                            <Text fontSize="0.875rem" color={colors.linkText}>{profession}</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex borderBottom={colors.borderBottom} color={colors.mediumGray} paddingY="0.75rem" flexDir="column" >
                    <Flex cursor="pointer" _hover={{ bg: colors.bgHover }} paddingTop="0.25rem" fontWeight={600} fontSize="0.75rem">
                        <Flex w="100%" justifyContent="space-between" marginX="0.8rem" >
                            <Text>Who's viewed your profile</Text>
                            <Text color={colors.buttonSecondary}>100</Text>
                        </Flex>

                    </Flex>
                    <Flex cursor="pointer" _hover={{ bg: colors.bgHover }} paddingY="0.25rem" fontWeight={600} fontSize="0.75rem">
                        <Flex w="100%" justifyContent="space-between" marginX="0.8rem" >
                            <Text>Impressions of your posts</Text>
                            <Text color={colors.buttonSecondary}>56</Text>
                        </Flex>
                    </Flex>

                </Flex>
                <Flex cursor="pointer" _hover={{ bg: colors.bgHover }} fontWeight={600} fontSize="0.75rem">
                    <Flex maxH="2.613rem" borderBottom={colors.borderBottom} align="center" padding="0.75rem">
                        <Image marginRight="0.3rem" w="1rem" h="1rem" src={premium} alt="premium" />
                        <Text fontSize="0.75rem" fontWeight={600} color={colors.blackE6}>See your Premium features</Text>
                    </Flex>
                </Flex>
                <Flex flexDir="column" cursor="pointer" _hover={{ bg: colors.bgHover }}>
                    <Flex maxH="2.613rem" borderBottom={colors.borderBottom} align="center" padding="0.75rem">
                        <Image className="navbar-images" marginRight="0.45rem" w="1rem" h="1rem" src={flag} alt="premium" />
                        <Text fontSize="0.75rem" fontWeight={600} color={colors.blackE6}>My items</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDir="column" borderRadius="0.3rem" bg="white" w="14.063rem">
                <Flex flexDir="column" paddingTop="0.5rem">
                    <Flex paddingLeft="0.75rem" justifyContent="space-between" align="center">
                        <Text onClick={setisVissible} cursor="pointer" w="90%" className="myDIV" paddingTop="0.30rem" fontSize="0.75rem">Recent</Text>
                        <Image paddingRight="0.9rem" className="myDIV navbar-images hide" alt="arrow" src={vissible ? arrowUp : arrowDown} />
                    </Flex>
                    {vissible &&
                        <Flex gap="0.1rem" paddingTop="0.5rem" flexDir="column">
                            <Flex justifyContent="center" h="1.4rem" flexDir="column" cursor="pointer" _hover={{ bg: colors.bgHover }}>
                                <Flex paddingLeft="0.75rem" w="14.063rem"
                                    maxH="2.613rem"
                                    align="center">
                                    <Image className="navbar-images" marginRight="0.45rem" w="1rem" h="1rem" src={people} alt="premium" />
                                    <Text fontSize="0.75rem" fontWeight={600} color={colors.linkText}>The ICF Community</Text>
                                </Flex>
                            </Flex>
                            <Flex justifyContent="center" h="1.4rem" flexDir="column" cursor="pointer" _hover={{ bg: colors.bgHover }}>
                                <Flex paddingLeft="0.75rem" w="14.063rem" textAlign="center"
                                    align="center">
                                    <Image className="navbar-images" marginRight="0.45rem" w="1rem" h="1rem" src={people} alt="premium" />
                                    <Text fontSize="0.75rem" fontWeight={600} color={colors.linkText}>Premium Career Group</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    }
                    <Flex flexDir="column" marginTop="1.4rem">
                        <Flex>
                            <Text cursor="pointer" onClick={setisVissibleG} w="90%" className="myDIV2" _hover={{ textDecor: `1px underline ${colors.buttonSecondary}` }} paddingLeft="0.75rem" paddingBottom="0.4rem" fontWeight={700} fontSize="0.75rem" color={colors.buttonSecondary}>Groups</Text>
                            <Image paddingRight="0.9rem" className="myDIV2 navbar-images hide" alt="arrow" src={vissibleG ? arrowUp : arrowDown} />
                        </Flex>
                        {vissibleG &&
                            <Flex gap="0.1rem" marginBottom="1rem" flexDir="column" >
                                <Flex justifyContent="center" h="1.4rem" flexDir="column" cursor="pointer" _hover={{ bg: colors.bgHover }}>
                                    <Flex paddingLeft="0.75rem" w="14.063rem" maxH="2.613rem" align="center">
                                        <Image className="navbar-images" marginRight="0.45rem" w="1rem" h="1rem" src={people} alt="premium" />
                                        <Text fontSize="0.75rem" fontWeight={600} color={colors.linkText}>The ICF Community</Text>
                                    </Flex>
                                </Flex>
                                <Flex justifyContent="center" h="1.4rem" flexDir="column" cursor="pointer" _hover={{ bg: colors.bgHover }}>
                                    <Flex paddingLeft="0.75rem" w="14.063rem" maxH="2.613rem" align="center">
                                        <Image className="navbar-images" marginRight="0.45rem" w="1rem" h="1rem" src={people} alt="premium" />
                                        <Text fontSize="0.75rem" fontWeight={600} color={colors.linkText}>Premium Career Group</Text>
                                    </Flex>
                                </Flex>
                                <Flex align="center" paddingY="0.2rem" flexDir="column" cursor="pointer" _hover={{ bg: colors.bgHover }}>
                                    <Flex w="14.063rem" maxH="2.613rem" align="center">

                                        <Text paddingLeft="2.25rem" fontSize="0.75rem" fontWeight={600} color={colors.linkText}>See all</Text>
                                    </Flex>
                                </Flex>
                            </Flex>

                        }
                    </Flex>

                    <Flex paddingLeft="0.75rem" paddingBottom="0.45rem" align="center" >
                        <Text _hover={{ textDecor: `1px underline ${colors.buttonSecondary}` }} w="85%" cursor="pointer" fontWeight={700} fontSize="0.75rem" color={colors.buttonSecondary}>Events</Text>
                        <Flex marginBotom="1rem" borderRadius="50%" position="relative" w="2rem" h="2rem"
                            _hover={{ transition: "0.5s", bg: colors.bgHover }} cursor="pointer" color={colors.mediumGray}  >
                            <Flex>
                                <AddIcon marginLeft="0.6rem" marginTop="0.6rem" borderRadius="50%" w="0.75rem" h="0.75rem" />
                            </Flex>
                        </Flex>

                    </Flex>
                    <Flex paddingLeft="0.75rem" paddingBottom="0.5rem" borderBottom={colors.borderBottom} >
                        <Text _hover={{ textDecor: `1px underline ${colors.buttonSecondary}` }} w="85%" cursor="pointer" fontWeight={700} fontSize="0.75rem" color={colors.buttonSecondary}>Followed Hashtags</Text>
                    </Flex>
                </Flex>
                <Flex paddingLeft="0">
                    <Button fontWeight={600} fontSize="0.875rem" color={colors.linkText} bg="transparent" _hover={{ bg: colors.bgHover }} borderTopRadius="0" w="100%">Discover more</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}