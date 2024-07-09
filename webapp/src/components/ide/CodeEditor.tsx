'use client'

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import SelectLang from "@/components/ide/SelectLang"
import { supportedLangs } from "@/lib/constants/supportedLangs"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import InputOutput from "@/components/ide/InputOutput"
import { Dispatch, SetStateAction, useState } from "react"


export default function () {

  const [code , setCode] = useState('')
  const [lang , setLang] = useState(supportedLangs[0])

  function handleTabPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Tab') {
      e.preventDefault()
      const textarea = e.target as HTMLTextAreaElement
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const value = textarea.value
      textarea.value = value.substring(0, start) + '  ' + value.substring(end)
      textarea.selectionStart = textarea.selectionEnd = start + 2
    }
  }

  return (

    <ResizablePanelGroup
      direction="vertical"
      className="p-6"
    >
      <ResizablePanel defaultSize={65} className="flex flex-col gap-2 p-2">
        <TopBar setLang={setLang}/>
        <div className="flex-grow bg-muted rounded-md p-4">
          <Textarea onKeyDown={handleTabPress} onChange={e=>setCode(e.target.value)} className="w-full font-mono min-h-full resize-none" placeholder="Enter your code here..." />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="flex flex-row gap-2 p-2">
        <InputOutput />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

function TopBar({setLang}:{setLang: Dispatch<SetStateAction<typeof supportedLangs[0]>>}) {
  return (
    <div className="flex items-center justify-between">
      <SelectLang setLang={setLang} />
      <div className="flex flex-row gap-2">
        <div className="flex gap-2">
          <Button variant="outline">Run</Button>
          <Button >Submit</Button>
          <Button variant="secondary">Submissions</Button>
        </div>
      </div>
    </div>
  )
}

