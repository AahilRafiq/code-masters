'use client'

import CodeEditor from "@/components/ide/CodeEditor"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import QuestionDesc from "@/components/ide/QuestionDesc"

export default function Component() {
    return (

        <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-lg border min-w-full min-h-screen"
        >
            <ResizablePanel defaultSize={40}>
                {/* contains static data for now */}
                <QuestionDesc />
            </ResizablePanel>
            <ResizableHandle withHandle/>
            <ResizablePanel defaultSize={60}>
                <CodeEditor />
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}

