'use server'

import { supportedLangs } from "@/lib/constants/supportedLangs";

export async function fetchOutput(code: string, stdin: string , lang: typeof supportedLangs[0]):Promise<string> {

    if(!lang) return "Language not supported";

    try {
        const res = await fetch('http://localhost:2000/api/v2/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                language: lang.name,
                version: lang.version,
                files: [{ name: `main.${lang.extension}`, content: code }],
                stdin: stdin,
                compile_timeout: 10000,
                run_timeout: 3000,
                compile_memory_limit: -1,
                run_memory_limit: -1
            })
        })
        
        const data = await res.json();
        
        if(data.compile?.code) return data.compile.output;
        return data.run.output;

    } catch (err) {
        console.log(err);
        return JSON.stringify(err)
    }

}