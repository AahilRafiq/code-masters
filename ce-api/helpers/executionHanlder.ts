import { createClient } from 'redis';
import type { RedisClientType } from 'redis';
import { Sema } from 'async-sema';
import { processTask } from './processTask';

export class ExecutionHandler {
    private static instance: ExecutionHandler
    private redisClient: RedisClientType = createClient()
    private sema: Sema

    private constructor() {
        this.sema = new Sema(parseInt(process.env.MAX_ACTIVE_REQ) || 2)
        this.redisClient = createClient()
    }

    static getInstance() {
        if (ExecutionHandler.instance) return ExecutionHandler.instance
        ExecutionHandler.instance = new ExecutionHandler()
        return ExecutionHandler.instance
    }

    async connect() {
        try {
            await this.redisClient.connect()
            return true
        } catch (err) {
            console.log(err);
            return false
        }
    }

    handleExecutions() {

        const sema = this.sema
        const redisClient = this.redisClient

        async function start() {
            while (true) {
                const task = await redisClient.BRPOP('tasks', 0)
                if (task) {
                    // process the task by acquiring the semaphore
                    (async () => {
                        try {
                            await sema.acquire()
                            await processTask(task.element)
                        } catch (err) {
                            console.log(err)
                        }
                        sema.release()
                    })()
                }
            }
        }

        start()
    }
}