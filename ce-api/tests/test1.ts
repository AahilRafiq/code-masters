import { createClient } from 'redis';

const redisClient = createClient();

await redisClient.connect();

await redisClient.LPUSH('tasks',JSON.stringify({
    task_id: "1",
    language: "python",
    version: "3.12.0",
    files: [
        {
            "name": "some.py",
            "content": "prnt(1+70)"
        }
    ],
    stdin: "",
    args: ["1", "2", "3"],
    compile_timeout: 10000,
    run_timeout: 3000,
    compile_memory_limit: -1,
    run_memory_limit: -1
}))

redisClient.disconnect()