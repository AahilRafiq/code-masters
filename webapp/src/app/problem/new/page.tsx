'use client'

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
    return (
        <div className="flex flex-col h-screen">
            <main className="flex-1 flex flex-col max-w-4xl mx-auto p-6 md:p-10 space-y-6">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold">Create Coding Question</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* QUESTION NAME */}
                        <div className="space-y-2">
                            <Label htmlFor="question-name">Question Name</Label>
                            <Input id="question-name" placeholder="Enter question name" />
                        </div>

                        {/* DIFFICULTY */}
                        <div className="space-y-2">
                            <Label htmlFor="difficulty">Difficulty</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select difficulty" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="easy">Easy</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="hard">Hard</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* TOPIC */}
                        <div className="space-y-2">
                            <Label htmlFor="topic">Topic</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select topic" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="algorithms">Algorithms</SelectItem>
                                    <SelectItem value="data-structures">Data Structures</SelectItem>
                                    <SelectItem value="programming-fundamentals">Programming Fundamentals</SelectItem>
                                    <SelectItem value="databases">Databases</SelectItem>
                                    <SelectItem value="web-development">Web Development</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* CODING QUESTION */}
                    <Tabs defaultValue="plain-text">
                        <TabsList>
                            <TabsTrigger value="plain-text">Plain Text</TabsTrigger>
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                        </TabsList>

                        {/* CODING QUESTION RAW*/}
                        <TabsContent value="plain-text">
                            <Textarea className="h-[400px] w-full resize-none" placeholder="Enter your coding question here..." />
                        </TabsContent>

                        {/* CODING QUESTION PREVIEW*/}
                        <TabsContent value="preview">
                            <div className="h-[400px] w-full bg-muted rounded-md p-4">
                                <h2 className="text-2xl font-bold mb-4">Coding Question</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
                                </p>
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
                                className="h-[150px] w-full resize-none"
                                placeholder="Enter the test cases entire input..."
                            />
                        </div>

                        {/* Expected output */}
                        <div className="space-y-2">
                            <Label htmlFor="expected-output">Expected Output</Label>
                            <Textarea
                                id="expected-output"
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
                            <Textarea className="h-[400px] w-full resize-none" placeholder="Enter The Solution here..." />
                        </TabsContent>

                        {/* SOLUTION PREVIEW*/}
                        <TabsContent value="preview">
                            <div className="h-[400px] w-full bg-muted rounded-md p-4 overflow-auto">
                                <h2 className="text-2xl font-bold mb-4">Coding Question</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
                                    nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
                                </p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

            </main>
            <footer className="bg-background border-t">
                <div className="max-w-4xl mx-auto p-4 md:p-6 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">&copy; 2024 Your Company. All rights reserved.</p>
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost">Cancel</Button>
                        <Button>Save</Button>
                    </div>
                </div>
            </footer>
        </div>
    )
}