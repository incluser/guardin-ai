import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import "./Policies.css"
import { Textarea } from "@chakra-ui/react"
import React from "react"
import { Task } from "../../types/Task.types"
type PoliciesProps = {
    currentTask: Task;
}
const Policies: React.FC<PoliciesProps> = ({ currentTask }) => {
    const [policies, setPolicies] = React.useState<string>(currentTask.policies)
    React.useEffect(() => {
        setPolicies(currentTask.policies)
    }, [currentTask])
    return (
        <div className="policy-form">
            <Accordion defaultIndex={[0]} allowMultiple >
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box color="main.text" as='span' flex='1' textAlign='left'>
                                Policies
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Textarea onChange={(e) => setPolicies(e.target.value)} value={policies} placeholder="Enter a description.." />
                    </AccordionPanel>
                </AccordionItem>


            </Accordion>
        </div>
    )
}

export default Policies