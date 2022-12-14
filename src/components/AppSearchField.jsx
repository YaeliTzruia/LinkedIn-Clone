import { FormControl, FormLabel, InputGroup, InputRightElement, InputLeftElement, Image, Flex, Input } from "@chakra-ui/react";
import { colors } from "../themes/colors";
import { FiSearch } from "react-icons/fi";
import { Search2Icon } from '@chakra-ui/icons'


export default function AppSearchField({ right = false, className, placeholder, ...props }) {


    return (


        < InputGroup {...props} size='md' >
            {right ?
                <Flex align="center">

                    <InputRightElement paddingLeft="0.5rem" className="navbar-images" paddingBottom="0.3rem" pointerEvents='none' children={<Search2Icon w="0.8rem" h="1.5rem" />} />

                    <Input _placeholder={{ fontWeight: 500, fontSize: "0.9rem", color: colors.linkText }} placeholder={placeholder} backgroundColor="#eef3f8" border="none" h="2.125rem" w="17.5rem" paddingLeft="2.5rem" />
                </Flex>
                :
                <Flex>

                    <InputLeftElement pointerEvents='none' children={<Search2Icon />} />

                    <Input placeholder={placeholder} backgroundColor="#eef3f8" border="none" h="2.125rem" w="17.5rem" paddingLeft="2.5rem" />
                </Flex>


            }

        </InputGroup >

    )
}