import Markdown from "react-markdown"

interface Props {
    question: string,
    name: string,
    difficulty: string,
    topics: string[],
}

export default function ({question , difficulty , topics , name}:Props) {
    return (
        <div className="bg-background p-6 md:p-8 lg:p-10 flex flex-col gap-4 max-h-screen overflow-scroll no-scrollbar">

            {/* Name */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{name}</h1>
            </div>

            {/* Tags */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="px-2 py-1 rounded-md text-xs font-medium text-black bg-primary">{difficulty}</div>
                    
                    {topics.map((topic, index) => ( 
                        <div key={index} className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-primary">{topic}</div>
                    ))}
                    
                </div>
            </div>

            {/* Question */}
            <Markdown className="prose prose-invert">{question}</Markdown>
        </div>
    )
}
