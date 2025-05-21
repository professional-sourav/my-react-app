import type { Task } from "../../../types";
import { useActionState, useRef } from "react"

const SingleTask = ({ id, todo, completed }: Task) => {
    const formRef = useRef<HTMLFormElement>(null);

    async function updateTaskStatus(prevState: boolean, formData: FormData) {
        const newStatus = formData.get("completed") === "on";
        console.log("Updating task status:", newStatus);
        
        return newStatus;
    }

    const [completedState, formAction] = useActionState(updateTaskStatus, completed) 

    return (
        <tr className="task">
            <td>{id}</td>
            <td>{todo}</td>
            <td>
                <form ref={formRef} action={formAction}>
                    <input 
                    type="checkbox" 
                    name="completed"
                    defaultChecked = {completedState}
                    onChange={() => {
                        // Submit the form when the checkbox changes
                        formRef.current?.requestSubmit();
                    }} />
                </form>
            </td>
        </tr>
    )
}

export default SingleTask