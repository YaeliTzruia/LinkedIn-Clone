import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Divider,
    Flex,
} from '@chakra-ui/react'
import { colors } from '../../../../../themes/colors'
import EditUserForm from './EditUserForm'

export default function EditInfoModal({ isOpen, onClose }) {


    return (
        <>


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bgColor="rgba(0,0,0,.75)" />
                <ModalContent overflow="scroll" marginTop="6rem" h="57rem" minW="46.5rem">
                    <ModalHeader padding="1rem 3rem 1rem 1.5rem" h="3.813rem" fontWeight={400} fontSize="1.25rem">Edit intro</ModalHeader>
                    <Flex justifyContent="center">
                        <Divider color={colors.border} />
                    </Flex>
                    <ModalCloseButton />
                    <ModalBody color={colors.linkText} >

                        <Text fontSize="0.75rem">* Indicates required</Text>
                        <EditUserForm />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}