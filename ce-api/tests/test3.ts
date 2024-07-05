import { createClient } from 'redis';

const redisClient = createClient();

await redisClient.connect();

// initialize array of size 10

let tasks = new Array()
for(let i=0;i<20;i++) {
    tasks.push(redisClient.LPUSH('tasks',JSON.stringify({
        task_id: i.toString(),
        language: "python",
        version: "3.12.0",
        files: [
            {
                "name": "some.py",
                "content": "print(1+70)"
            }
        ],
        stdin: "",
        args: ["1", "2", "3"],
        compile_timeout: 10000,
        run_timeout: 3000,
        compile_memory_limit: -1,
        run_memory_limit: -1
    })))
}

await Promise.all(tasks)

// close the connection


