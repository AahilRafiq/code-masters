import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function InputOutput() {
    return (
      <div className=" min-h-full flex-1 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 min-h-full">
          <div className="bg-muted rounded-md p-4 flex-1 flex-grow">
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
    )
  }