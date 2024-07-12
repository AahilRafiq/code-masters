'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import { getTopics } from "@/helpers/problems/getTopics"
import { Topics } from "@/db/schema"
import { InferSelectModel } from "drizzle-orm"
import { createNewTopic } from "@/actions/problems/createNewTopic"

type Topic = InferSelectModel<typeof Topics>

export default function ({ setTopicsToSubmit }: { setTopicsToSubmit: (topics: Topic[]) => void }) {
    const { toast } = useToast()
    const [query, setQuery] = useState('')
    const [topics, setTopics] = useState<Topic[]>([])
    const [selectedTopics, setSelectedTopics] = useState<Topic[]>([])

    useEffect(() => {
        async function handleQuery() {

            const res = await getTopics(query)
            if(res.ok) {
                const data = await res.json()
                setTopics(data.topics)
                
            } else {
                toast({
                    title: 'Error',
                    description: "Topics Fetch failed",
                    variant: 'destructive',
                    duration: 3000
                })
            }
        }
        handleQuery()
    }, [query, toast])

    async function handleNewTopic() {
        if (query.length === 0) return
        const res = await createNewTopic(query)
        if (res.success) {
            setTopics([res.res!])
        } else {
            toast({
                title: 'Error',
                description: res.message,
                variant: 'destructive',
                duration: 3000
            })
        }
    }

    function handleSelection(id: number) {
        const selectedTopic = topics.find(topic => topic.id === id)
        if (selectedTopic && !selectedTopics.find(topic => topic.id === selectedTopic.id)) {
            const newSelectedTopics = [...selectedTopics, selectedTopic]
            setTopicsToSubmit(newSelectedTopics)
            setSelectedTopics(newSelectedTopics)
        }
    }

    function handleRemoveTopic(id: number) {
        const newSelectedTopics = selectedTopics.filter(topic => topic.id !== id)
        setTopicsToSubmit(newSelectedTopics)
        setSelectedTopics(newSelectedTopics)
    }

    return (
        <div className="space-y-1">
            <Label htmlFor="topics">Topics</Label>
            <div className="flex flex-wrap gap-2 pb-1.5">
                {selectedTopics?.map(topic => (
                    <SelectedTopic key={topic.id} id={topic.id} handleRemoveTopic={handleRemoveTopic} name={topic.name!} />
                ))}
            </div>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="flex flex-col">
                        <SelectLabel>Existing Topics</SelectLabel>
                        {topics.map(topic => (
                            <DisplayTopic key={topic.id} id={topic.id!} handleSelection={handleSelection} name={topic.name!} />
                        ))}
                    </SelectGroup>
                    <Separator />
                    <SelectGroup>
                        <div className="px-4 py-2">
                            <div className="flex items-center space-x-2">
                                <Input onChange={e => setQuery(e.target.value)} placeholder="Search or create new" />
                                <Button onClick={handleNewTopic} size="sm">Create</Button>
                            </div>
                        </div>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

interface SelectedTopicProps {
    id: number,
    name: string,
    handleRemoveTopic: (id: number) => void
}

function SelectedTopic({ id, name, handleRemoveTopic }: SelectedTopicProps) {
    return (
        <div className="bg-primary dark:bg-gray-800 px-2 py-1 rounded-full flex items-center gap-2">
            <span className="text-sm text-black">{name}</span>
            <button onClick={() => handleRemoveTopic(id)} className="text-black hover:text-gray-300 ">
                <XIcon className="h-4 w-4" />
            </button>
        </div>
    )
}

interface DisplayTopicProps {
    id: number,
    name: string,
    handleSelection: (id: number) => void
}

function DisplayTopic({ id, name, handleSelection }: DisplayTopicProps) {
    return <span className="ml- dark:text-black"><Button variant="ghost" value={name} onClick={() => handleSelection(id)}>{name}</Button></span>
}