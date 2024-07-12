'use client'

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Topics } from "@/db/schema"
import { InferSelectModel } from "drizzle-orm"
import { useState } from "react"
import SelectTopics from "@/components/problems/new/SelectTopics"
import Markdown from 'react-markdown'
import { problemDifficulty } from "@/types/difficultyEnum"
import { useRouter } from "next/navigation"
import { createNewProblem } from "@/actions/problems/createNewProblem"
import { useToast } from "@/components/ui/use-toast"
import { displayErrorToast , displayNormalToast } from "@/lib/functions/actionResponseHelpers"

type Topic = InferSelectModel<typeof Topics>

export default function Component() {

    const {toast} = useToast()
    const router = useRouter()
    const [difficulty, setDifficulty] = useState<string>("easy")
    const [topics, setTopics] = useState<Topic[]>([])
    const [name, setName] = useState<string>("")
    const [question, setQuestion] = useState<string>("")
    const [solution, setSolution] = useState<string>("")
    const [input, setInput] = useState<string>("")
    const [output, setOutput] = useState<string>("")

    async function handleCreate() {
        const problemDifficulty = difficulty as "easy" | "medium" | "hard"
        const res = await createNewProblem(name, problemDifficulty, topics, question, input, output, solution)
        if (res.success) {
            displayNormalToast(toast,'Success', "Problem created successfully")
            router.push("/problems")
        } else {
            alert(res.message)
            displayErrorToast(toast, res.message!)
        }
    }

    return (
        <div className="flex flex-col h-screen w-full mx-auto lg:max-w-3xl">
            <main className="flex-1 flex flex-col w-full mx-auto p-6 md:p-10 space-y-6">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold">Create Coding Question</h1>
                    </div>
                    <div className="flex flex-row gap-2">

                        {/* QUESTION NAME */}
                        <div className="space-y-2 flex-grow">
                            <Label htmlFor="question-name">Question Name</Label>
                            <Input onChange={e=>setName(e.target.value)} value={name} id="question-name" placeholder="Enter question name" />
                        </div>

                        {/* DIFFICULTY */}
                        <div className="space-y-2">
                            <Label htmlFor="difficulty">Difficulty</Label>
                            <Select onValueChange={(value) => setDifficulty(value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select difficulty" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={problemDifficulty.easy}>Easy</SelectItem>
                                    <SelectItem value={problemDifficulty.medium}>Medium</SelectItem>
                                    <SelectItem value={problemDifficulty.hard}>Hard</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                    </div>

                    {/* TOPIC */}
                    <div className="space-y-2">
                        <SelectTopics setTopicsToSubmit={setTopics} />
                    </div>
                    {/* CODING QUESTION */}
                    <Tabs defaultValue="plain-text">
                        <TabsList>
                            <TabsTrigger value="plain-text">Plain Text</TabsTrigger>
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                        </TabsList>

                        {/* CODING QUESTION RAW*/}
                        <TabsContent value="plain-text">
                            <Textarea value={question} onChange={e => setQuestion(e.target.value)} className="h-[400px] w-full resize-none" placeholder="Enter your coding question here..." />
                        </TabsContent>

                        {/* CODING QUESTION PREVIEW*/}
                        <TabsContent value="preview">
                            <div className="h-[400px]  w-full border-2 rounded-md p-4 overflow-y-auto">
                                <Markdown className="prose prose-invert">{question}</Markdown>
                            </div>
                        </TabsContent>
                    </Tabs>

                    {/* Test cases */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                        {/* Input test case */}
                        <div className="space-y-2">
                            <Label htmlFor="test-cases">Testcase</Label>
                            <Textarea
                                id="test-cases"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                className="h-[150px] w-full resize-none"
                                placeholder="Enter the test cases entire input..."
                            />
                        </div>

                        {/* Expected output */}
                        <div className="space-y-2">
                            <Label htmlFor="expected-output">Expected Output</Label>
                            <Textarea
                                id="expected-output"
                                value={output}
                                onChange={e => setOutput(e.target.value)}
                                className="h-[150px] w-full resize-none"
                                placeholder="Enter the expected output here..."
                            />
                        </div>
                    </div>

                    {/* SOLUTION */}
                    <Tabs defaultValue="plain-text">
                        <TabsList>
                            <TabsTrigger value="plain-text">Plain Text</TabsTrigger>
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                        </TabsList>
                        <TabsContent value="plain-text">

                            {/* SOLUTION RAW*/}
                            <Textarea value={solution} onChange={e => setSolution(e.target.value)} className="h-[400px] w-full resize-none" placeholder="Enter The Solution here..." />
                        </TabsContent>

                        {/* SOLUTION PREVIEW*/}
                        <TabsContent value="preview">
                            <div className="h-[400px] w-full border-2 rounded-md p-4 overflow-y-auto">
                                <Markdown className="prose prose-invert">{solution}</Markdown>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

            </main>
            <footer className="bg-background border-t">
                <div className="max-w-4xl mx-auto p-4 md:p-6 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">&copy; 2024 Your Company. All rights reserved.</p>
                    <div className="flex items-center space-x-2">
                        <Button onClick={()=>router.push('/')} variant="ghost">Cancel</Button>
                        <Button onClick={handleCreate}>Create</Button>
                    </div>
                </div>
            </footer>
        </div>
    )
}