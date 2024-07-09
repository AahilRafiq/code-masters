import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import SelectLang from "@/components/ide/SelectLang"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import InputOutput from "@/components/ide/InputOutput"

export default function () {
  return (

    <ResizablePanelGroup
      direction="vertical"
      className="p-6"
    >
      <ResizablePanel defaultSize={65} className="flex flex-col gap-2 p-2">
        <TopBar />
        <div className="flex-grow bg-muted rounded-md p-4">
          <Textarea className="w-full min-h-full resize-none" placeholder="Enter your code here..." />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="flex flex-row gap-2 p-2">
        <InputOutput />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

function TopBar() {
  return (
    <div className="flex items-center justify-between">
      <SelectLang langs={['c++', 'python']} />
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

