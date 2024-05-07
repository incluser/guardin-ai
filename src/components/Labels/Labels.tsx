import { Button, FormControl, FormLabel, HStack, Input, useDisclosure } from "@chakra-ui/react"
import { CirclePlus } from "lucide-react"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { updateTask } from "../../redux/slices/TaskSlice"
import { Tags, Task } from "../../types/Task.types"
import LabelTag from "./LabelTag"
import "./Labels.css"
import TagModal from "./TagModal"

type LabelsProps = {
    currentTask: Task;
}

const Labels: React.FC<LabelsProps> = ({ currentTask }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [description, setDescription] = useState<string>(currentTask.label_description)
    const [tags, setTags] = useState<Tags>(currentTask.tags)
    const [label, setLabel] = useState<string>('')
    const [tagDescription, setTagDescription] = useState<string>('')
    const dispatch = useDispatch()

    React.useEffect(() => {
        setDescription(currentTask.label_description)
        setTags(currentTask.tags)
    }, [currentTask])

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
        dispatch(updateTask({ id: currentTask.id, field: 'description', value: e.target.value }));
    };

    const handleTagsChange = () => {
        const newTags = [...tags, { id: Math.random(), label, description: tagDescription }];
        setTags(newTags);
        dispatch(updateTask({ id: currentTask.id, field: 'tags', value: newTags }));
        setLabel('');
        setTagDescription('');
        onClose();
    };

    const handleTagClose = (index: number) => {
        setTags(tags.filter((_, _index) => _index !== index))
    }

    return (
        <div className="label-form">
            <p>Define labels & policies</p>
            <div className="label-actions">
                <div className="description">
                    <HStack spacing={1}>
                        {(tags).map((tag, index) => (
                            <LabelTag key={tag.id} tag={tag} index={index} handleTagClose={handleTagClose} />
                        ))}
                    </HStack>
                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Input value={description} onChange={(e) => handleDescriptionChange(e)} type='text' placeholder="Enter a description.." />
                        <Button bg="main.tab_underline" mt='10px' colorScheme='blue'>Save</Button>
                    </FormControl>
                </div>
                <div className="tag">
                    <FormControl>
                        <CirclePlus onClick={onOpen} cursor="pointer" strokeWidth={1.25} size={30} color="#2542e0" />
                        <p className="add-tag">Add New</p>
                    </FormControl>
                </div>
            </div>

            <TagModal isOpen={isOpen} onClose={onClose} label={label} setLabel={setLabel} tagDescription={tagDescription} setTagDescription={setTagDescription} handleTagsChange={handleTagsChange} />
        </div>
    )
}

export default Labels