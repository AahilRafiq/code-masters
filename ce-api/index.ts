import { createClient } from 'redis';
import { processTask } from './helpers/processTask';

const redisClient = createClient();

async function startServer() {
    try {
        await redisClient.connect()
        console.log('Server Started')

        while(true) {
            const task = await redisClient.BRPOP('tasks',0)
            processTask(JSON.stringify(task))
        }

    } catch(err) {
        console.log(err)
    }
}

startServer()

