import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Image, Text } from "@chakra-ui/react";
import exit from "../../../assets/svg/phone-menu-X.svg";
import AppButton from "../../../components/AppButton";
import { topicOptions } from "../../../Json-data/landingpage/topicOptions";
import { colors } from "../../../themes/colors";

export default function SelectOpen({ isOpen, onOpen, onClose }) {


    return (

        <Drawer
            // size={["sm", "lg", "lg", "lg"]}
            isFullHeight={true}
            returnFocusOnClose={true}
            placement="top"
            onClose={onClose}
            isOpen={isOpen}
        >
            <DrawerOverlay />
            <DrawerContent >
                <DrawerHeader w="100%" padding="0">

                    <Flex marginBottom="0.7rem" display="block" justifyContent="center" align="center" paddingTop="0.75rem" paddingBottom="1rem" paddingX="1.5rem" >
                        <Flex marginLeft={["17.25rem", "20.625rem", "20.625rem", "20.625rem"]} justifyContent="center" align="center" h="2.5rem" w="2.5rem">
                            <Image w="1.5rem" h="1.5rem" opacity={1}
                                onClick={onClose}
                                alt="lines menu"
                                src={exit}
                            />
                        </Flex>
                        <Flex>
                            <Heading fontSize="1.5rem" fontWeight={500}>Choose a topic to learn about</Heading>
                        </Flex>
                    </Flex>
                    <DrawerBody padding="0" >
                        <Flex
                            // zIndex={3}
                            position="relative"
                            paddingX="1rem"
                            flexDir="column"
                            h={["540px", "795px", null, null]}
                            w="100%"

                        // backgroundColor="#F0F4FF"
                        >

                            {topicOptions.map((data) =>
                                <Flex flexDir="column"
                                    paddingBottom="1rem"
                                    // marginTop="1rem"
                                    key={data.title}

                                    fontSize="25px"
                                    _active={{ textDecoration: "underline" }}
                                >
                                    <Flex lineHeight={1.25} flexDir="column" h="2.5rem" >
                                        <Text marginTop="0.5rem" fontWeight={600} fontSize="1rem">
                                            {data.title}
                                        </Text>

                                        <Text color={colors.linkText} fontWeight={400} fontSize="1rem">
                                            {data.desc}
                                        </Text>
                                    </Flex>


                                </Flex>




                            )}

                        </Flex>
                    </DrawerBody>



                    <DrawerBody>
                    </DrawerBody>
                </DrawerHeader>
            </DrawerContent>
        </Drawer >

    )
}