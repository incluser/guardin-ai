import { File } from "lucide-react"
import "./TaskItem.css"
import { TaskItemProps } from "../../types/TaskItem.types";

const TaskItem = (props: TaskItemProps) => {
    const style = props.selected ? { backgroundColor: '#e1e4f9' } : {};
    return (
        <div className="task-item" onClick={props.onClick} style={style}>
            <File />
            <p>New Task</p>
        </div>
    )
}

export default TaskItem