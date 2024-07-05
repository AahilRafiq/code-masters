import { ExecutionHandler } from './helpers/executionHanlder';

const executionHanlder = ExecutionHandler.getInstance()

async function startServer() {
    try {
        await executionHanlder.connect()
        console.log('Server Started')

        executionHanlder.handleExecutions()

    } catch(err) {
        console.log(err)
    }
}

startServer()

