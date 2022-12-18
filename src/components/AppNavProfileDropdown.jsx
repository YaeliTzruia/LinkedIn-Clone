import { Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import downArrow from "../assets/svg/down-arrow.svg"
import useAuth from "../hooks/useAuth"
import { colors } from "../themes/colors"

export default function AppNavProfileDorpdown({ text }) {
    const { profileImg, userFullName, profession } = useAuth()

    const account = [
        { name: "Settings & Privacy" },
        { name: "Help" },
        { name: "Language" }
    ]
    const manage = [
        { name: "Posts & Activity" },
        { name: "Job Posting Account" }
    ]


    return (

        <Menu >
            <MenuButton >
                <Image
                    w="1.5rem"
                    borderRadius='full'
                    src={profileImg}
                    alt='Profile image'

                />
                <Flex textAlign="center" justifyContent="center" align="center">
                    <Text color={colors.linkText} fontSize="0.75rem" fontWeight={400} >{text}</Text>
                    <Image src={downArrow} />
                </Flex>
            </MenuButton>
            <MenuList padding="0">
                <MenuItem padding="0.5rem" borderBottom={colors.borderBottom} flexDir="column" bg="transparent" minH='48px'>
                    <Flex w="100%" h="4rem">
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src={profileImg}
                            alt='profile image'
                            w="3.5rem"
                            h="3.5rem"
                        />
                        <Flex color={colors.blackE6} paddingLeft="0.5rem" flexDir="column">
                            <Text fontWeight={700} fontSize="1rem">{userFullName}</Text>
                            <Text fontSize="0.875rem">{profession}</Text>
                        </Flex>
                    </Flex>
                    <Button borderRadius="20" border={`1px solid ${colors.buttonSecondary}`} color={colors.buttonSecondary} bg="white" padding="0.125rem 0.75rem" marginTop="0.5rem" h="1.5rem" w="15.5rem">View Profile</Button>
                </MenuItem>
                <Flex padding="0.5rem" borderBottom={colors.borderBottom} alignItems="flex-start" flexDir="column">
                    <Text fontWeight={700} fontSize="1rem">Account</Text>
                    {account.map((data) =>
                        <MenuItem _hover={{ bg: "transparent" }} h="1.75rem" padding="0">
                            <Text padding="0" _hover={{ borderBottom: "0.5px solid black" }} color={colors.linkText} fontSize="0.875rem" key={data.name}>{data.name}
                            </Text>
                        </MenuItem>
                    )}
                </Flex>
                <Flex padding="0.5rem" borderBottom={colors.borderBottom} alignItems="flex-start" flexDir="column" minH='40px'>
                    <Text fontWeight={700} fontSize="1rem">Manage</Text>
                    {manage.map((data) =>
                        <MenuItem _hover={{ bg: "transparent" }} h="1.75rem" padding="0">
                            <Text padding="0" _hover={{ borderBottom: "0.5px solid black" }} color={colors.linkText} fontSize="0.875rem" key={data.name}>{data.name}
                            </Text>
                        </MenuItem>
                    )}
                </Flex>
                <MenuItem _hover={{ bg: "transparent" }} w="16.5rem" h="1.75rem" borderBottom={colors.borderBottom} alignItems="flex-start" flexDir="column" minH='40px'>
                    <Text _hover={{ borderBottom: "0.5px solid black" }} padding="0" alignItems="flex-start" fontWeight={400} color={colors.linkText} fontSize="0.875rem" variant="ghost">Sign Out</Text>
                </MenuItem>
            </MenuList>
        </Menu>

    )
}