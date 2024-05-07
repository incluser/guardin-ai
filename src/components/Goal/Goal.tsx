import { FormControl, FormLabel, Input, } from "@chakra-ui/react";
import "./Goal.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../redux/slices/TaskSlice";
import { Task } from "../../types/Task.types";
import { RootState } from "../../redux/store";

type GoalProps = {
    currentTask: Task;
}

const Goal: React.FC<GoalProps> = ({ currentTask }) => {
    const [goal, setGoal] = React.useState<string>(currentTask.goal)
    const [goal_description, setGoalDescription] = React.useState<string>(currentTask.goal_description)
    const dispatch = useDispatch()
    const task = useSelector((state: RootState) => state.tasks.tasks.find((task: Task) => task.id === currentTask.id))

    React.useEffect(() => {
        setGoal(currentTask.goal)
        setGoalDescription(currentTask.goal_description)
    }, [currentTask])

    const handleChangeInputGoal = (field: string, value: string) => {
        setGoal(value)
        dispatch(updateTask({ id: currentTask.id, field, value }))
    }
    const handleChangeInputGoalDesc = (field: string, value: string) => {
        setGoalDescription(value)
        dispatch(updateTask({ id: currentTask.id, field, value }))
    }

    return (
        <div className="goal-form">
            <p>Write your goals</p>
            <div className="goal-actions">
                <FormControl >
                    <FormLabel>Goal</FormLabel>
                    <Input
                        value={task?.goal || goal}
                        onChange={(e) => handleChangeInputGoal('goal', e.target.value)}
                        bg="main.light"
                        placeholder="Add a goal.."
                        type='text' />
                </FormControl>
                <FormControl >
                    <FormLabel>Description</FormLabel>
                    <Input
                        value={task?.goal_description || goal_description}
                        onChange={(e) => handleChangeInputGoalDesc('goal_description', e.target.value)}
                        bg="main.light"
                        placeholder="Enter a description.."
                        type='text' />
                </FormControl>
            </div>
        </div>
    )
}

export default Goal;