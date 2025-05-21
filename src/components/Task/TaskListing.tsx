import { useEffect, useState } from "react"
import type { Task } from '../../../types';
import { fetchTasks } from "../../services/TaskService";
import SingleTask from "./SingleTask";
import './Task.css'

const TaskList = () => {

    const [todos, setTodos] = useState<Task[]|null>([])

    useEffect(() => {

        fetchTasks().then((data) => {
            setTodos(data)
        })

    }, [])

    return (
        <>
            <h1>Task List</h1>
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