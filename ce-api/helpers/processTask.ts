export async function processTask(task: string) {

    const pistonURL = process.env.PISTON_API_URL || 'http://localhost:2000'

    try {
        let result = await fetch(`${pistonURL}/api/v2/execute`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: task.toString()
        })
        result = await result.json()
        console.log(result);

    } catch (err) {
        console.log(err)
    }
}