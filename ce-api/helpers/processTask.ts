import type { Task } from "../types/task";

export async function processTask(taskRAW: string) {

    const pistonURL = process.env.PISTON_API_URL || 'http://localhost:2000'
    const task: Task = JSON.parse(taskRAW)

    try {
        const res = await fetch(`${pistonURL}/api/v2/execute`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })
        const result = await res.json()
        result.task_id = task.task_id
        result.success = true
        return result

    } catch (err) {
        console.log(err)
        return {
            task_id: task.task_id,
            success: false,
        }
    }
}
