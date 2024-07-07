import { createClient } from 'redis';

const redisClient = createClient();

await redisClient.connect();

await redisClient.LPUSH('tasks',JSON.stringify({
    task_id: "1",
    language: "c++",
    version: "10.2.0",
    files: [
        {
            name: "some.cpp",
            content: `#include<iostream>
using namespace std;

int main() {
    int a , b;
    cin >>  a >> b;
    cout<< a+b;
    return 0;
}`
        }
    ],
    stdin: "1 2",
    args: ["1", "2", "3"],
    compile_timeout: 10000,
    run_timeout: 3000,
    compile_memory_limit: -1,
    run_memory_limit: -1
}))

redisClient.disconnect()