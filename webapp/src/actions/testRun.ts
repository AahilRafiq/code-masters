'use server'
export async function fetchOutput(code: string, stdin: string) {

    try {
        const res = await fetch('http://localhost:2000/api/v2/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                language: "c++",
                version: "10.2.0",
                files: [{ name: "main.cpp", content: code }],
                stdin: stdin,
                compile_timeout: 10000,
                run_timeout: 3000,
                compile_memory_limit: -1,
                run_memory_limit: -1
            })
        })
    
        const data = await res.json();
        
        if(data.compile.code) return data.compile.output;
        return data.run.output;

    } catch (err) {
        console.log(err);
        return err
    }

}