import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import React from "react"

type TagModalProps = {
    isOpen: boolean;
    onClose: () => void;
    label: string;
    setLabel: (label: string) => void;
    tagDescription: string;
    setTagDescription: (description: string) => void;
    handleTagsChange: () => void;
}

const TagModal: React.FC<TagModalProps> = ({ isOpen, onClose, label, setLabel, tagDescription, setTagDescription, handleTagsChange }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add a new tag</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Label</FormLabel>
                        <Input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Enter label" />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Input value={tagDescription} onChange={(e) => setTagDescription(e.target.value)} placeholder="Enter description" />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleTagsChange}>
                        Save
                    </Button>
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default TagModal