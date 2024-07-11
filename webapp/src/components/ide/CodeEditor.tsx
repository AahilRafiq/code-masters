'use client'

import { Button } from "@/components/ui/button"
import SelectLang from "@/components/ide/SelectLang"
import { supportedLangs } from "@/lib/constants/supportedLangs"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import InputOutput from "@/components/ide/InputOutput"
import { useState } from "react"
import Editor from "@monaco-editor/react";
import { fetchOutput } from "@/actions/testRun";

export default function () {

  const [code, setCode] = useState('')
  const [lang, setLang] = useState(supportedLangs[0])
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  async function runCode() {
    const res = await fetchOutput(code, input, lang)
    setOutput(res)
  }

  return (

    <ResizablePanelGroup
      direction="vertical"
      className="p-6"
    >
      <ResizablePanel defaultSize={65} className="flex flex-col gap-2 p-2">
        {/* Top bar */}

        <div className="flex items-center justify-between">
          <SelectLang setLang={setLang} />
          <div className="flex flex-row gap-2">
            <div className="flex gap-2">
              <Button onClick={runCode} variant="outline">Run</Button>
              <Button >Submit</Button>
              <Button variant="secondary">Submissions</Button>
            </div>
          </div>
        </div>

        <div className="flex-grow bg-muted rounded-md p-4">

          <Editor
            className="w-full min-h-full"
            language={lang.name == 'c++' ? 'cpp' : lang.name}
            theme="vs-dark"
            value={code}
            onChange={(value) => value && setCode(value)}
            options={{
              //@ts-ignore
              inlineSuggest: true,
              //@ts-ignore
              fontSize: "14px",
              formatOnType: true,
              //@ts-ignore
              autoClosingBrackets: true,
              minimap: { scale: 10 }
            }}
          />

        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="flex flex-row gap-2 p-2">
        <InputOutput setInput={setInput} input={input} output={output}/>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}