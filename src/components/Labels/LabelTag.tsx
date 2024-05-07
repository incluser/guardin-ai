import { Tag, TagCloseButton, TagLabel, Tooltip } from "@chakra-ui/react";
import React from "react";

type LabelTagProps = {
    tag: {
        id: number;
        label: string;
        description: string;
    };
    index: number;
    handleTagClose: (index: number) => void;
}

const LabelTag: React.FC<LabelTagProps> = ({ tag, index, handleTagClose }) => {
    return (
        <div key={tag.id}>
            <Tooltip label={tag.description} fontSize="md" placement="top">
                <Tag
                    borderRadius={3}
                    size="sm"
                    border='1px solid #dfdfdf'
                    key={tag.id}
                    background="transparent"
                >
                    <TagLabel fontSize={13} color="#4b4b4b">{tag.label}</TagLabel>
                    <TagCloseButton onClick={() => handleTagClose(index)} />
                </Tag>
            </Tooltip>
        </div>
    )
}

export default LabelTag