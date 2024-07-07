'use client'

import { useState } from 'react';
import { fetchOutput } from '@/actions/testRun';

const Editor = () => {
    const [code, setCode] = useState('');
    const [stdin, setStdin] = useState('');
    const [output, setOutput] = useState('');

    const runCodeDirect = async () => {

        try {
            const res = await fetchOutput(code, stdin);
            setOutput(res);

        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Simple Code Editor</h1>
            <div className="mb-4">
                <label className="block text-gray-700">Code</label>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    rows={10}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Stdin</label>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    rows={3}
                    value={stdin}
                    onChange={(e) => setStdin(e.target.value)}
                ></textarea>
            </div>
            <button
                onClick={runCodeDirect}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Run Code Direct
            </button>

            <button
                onClick={()=>alert('Not implemented yet')}
                className="ml-2 bg-blue-800 text-white px-4 py-2 rounded disabled"
            >
                Run Code Using Redis queue and all
            </button>

            <div className="mt-4">
                <label className="block text-gray-700">Output</label>
                <pre className="w-full p-2 border border-gray-300 rounded bg-white mt-1">
                    {output}
                </pre>
            </div>
        </div>
    );
};

export default Editor;

