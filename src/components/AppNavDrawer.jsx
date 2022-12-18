import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, Text } from "@chakra-ui/react";
import { colors } from "../themes/colors";
import downArrow from "../assets/svg/down-arrow.svg"

export default function AppNavDrawer({ isOpen, onOpen, onClose, workRef, icon, iconW, iconH, text, className, fontSize }) {


    return (
        <>
            <Flex onClick={onOpen} ref={workRef} fontWeight={400} wrap="nowrap" cursor="pointer" paddingTop="0.3rem" flexDir="column">
                <Flex h="2.625rem" justifyContent="space-between" alignItems="center" flexDir="column">
                    <Flex >
                        <Image className={className} w={iconW} h={iconH} color={colors.linkText} src={icon} />
                    </Flex>
                    <Flex textAlign="center" justifyContent="center" align="center">
                        <Text color={colors.linkText} fontSize={fontSize} fontWeight={400} >{text}</Text>
                        <Image src={downArrow} />
                    </Flex>
                </Flex>
            </Flex >

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={workRef}
            >
                <DrawerOverlay zIndex={1} />
                <DrawerContent borderTopLeftRadius="0.5rem" minW="23.75rem" border={colors.borderBottom} marginTop="3.3rem" >
                    <Flex paddingY="0.5rem" justifyContent="space-between" align="center">
                        <DrawerHeader fontWeight={700} padding="0" paddingLeft="1.5rem" flexDir="row" w="100%">Work</DrawerHeader>
                        <DrawerCloseButton borderRadius="50" size='lg' position="initial" marginRight="0.5rem" />
                    </Flex>


                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )

}