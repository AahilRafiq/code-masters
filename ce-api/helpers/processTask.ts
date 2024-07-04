export async function processTask(task: string) {

    const pistonURL = process.env.PISTON_API_URL || 'http://localhost:2000'

    try {
        let result = await fetch(`http://localhost:2000/api/v2/execute`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: task.toString()
        })
        result = await result.json()
        console.log(result);

    } catch(err) {

    }
    
}

/*
-> Example request
{
    "language": "python",
    "version": "3.12.0",
    "files": [
        {
            "name": "some.py",
            "content": "print(1+70)"
        }
    ],
    "stdin": "",
    "args": ["1", "2", "3"],
    "compile_timeout": 10000,
    "run_timeout": 3000,
    "compile_memory_limit": -1,
    "run_memory_limit": -1
}

*/