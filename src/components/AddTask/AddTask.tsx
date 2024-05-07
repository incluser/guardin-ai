import { Plus } from "lucide-react";
import "./AddTask.css";
type AddTaskProps = {
    onAddTask: () => void;
};
const AddTask = ({ onAddTask }: AddTaskProps) => {

    return (
        <div className="add-task-item" onClick={() => onAddTask()}>
            <Plus />
            <p>Add new task</p>
        </div>
    )
}

export default AddTask