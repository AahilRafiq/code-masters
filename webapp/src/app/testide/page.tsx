'use client'

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Component() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(300px,_1fr)_minmax(300px,_2fr)] h-screen w-full">
      <div className="bg-background p-6 md:p-8 lg:p-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">Easy</div>
            <div className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">Arrays</div>
          </div>
          <div className="text-sm text-muted-foreground">Submitted: 1,234 | Accepted: 789</div>
        </div>
        <h1 className="text-2xl font-bold">Two Sum</h1>
        <p className="text-muted-foreground">
          Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they
          add up to `target`.
        </p>
        <p className="text-muted-foreground">
          You may assume that each input would have exactly one solution, and you may not use the same element twice.
        </p>
        <p className="text-muted-foreground">You can return the answer in any order.</p>
      </div>
      <div className="bg-background p-6 md:p-8 lg:p-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost">Run</Button>
            <Button variant="ghost">Submit</Button>
            <Button variant="ghost">Submissions</Button>
          </div>
          <div className="text-sm text-muted-foreground">Time: 0.12s | Memory: 42.3MB</div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 bg-muted rounded-md p-4">
            <Textarea className="w-full h-full resize-none" placeholder="Enter your code here..." syntax-highlighting />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-md p-4 flex-1">
              <Label htmlFor="input">Input</Label>
              <Textarea id="input" placeholder="Enter input data here..." className="w-full h-full resize-none" />
            </div>
            <div className="bg-muted rounded-md p-4 flex-1">
              <Label htmlFor="output">Output</Label>
              <Textarea
                id="output"
                placeholder="Output will be displayed here..."
                className="w-full h-full resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}