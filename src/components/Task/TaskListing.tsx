import { useEffect, useState } from "react"
import type { Task } from '../../../types';
import { fetchTasks } from "../../services/TaskService";
import SingleTask from "./SingleTask";
import './Task.css'
import TaskPagination from "./TaskPagination";

const TaskList = () => {

    const [todos, setTodos] = useState<Task[]|null>([])
    const [skip, setSkip] = useState(0)

    useEffect(() => {

        fetchTasks(skip).then((data) => {
            setTodos(data)
        })

    }, [skip])

    const handleNextButtonClick = () => {
        console.log("Next button is clicked");

        setSkip((prevSkip) => (prevSkip + 30))
    }

    const handlePreviousButtonClick = () => {

        console.log("Previous button is clicked");

        if (skip === 0) {
            console.log("No previous page");
            
            return
        }

        setSkip((prevSkip) => (prevSkip - 30))
    }

    return (
        <>
            <h1>Task List</h1>
            <TaskPagination 
                nextButtonClick={handleNextButtonClick}
                previousButtonClick = {handlePreviousButtonClick} />

            <table className="tasks">
                <tbody>
                {todos?.map((todo) => (
                    <SingleTask key={todo.id} {...todo} />
                ))}
                </tbody>
            </table>
        </>
    )
}

export default TaskList