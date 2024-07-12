import CodeEditor from "@/components/ide/CodeEditor";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import QuestionDesc from "@/components/ide/QuestionDesc";
import { db } from "@/db/db";
import { Problems, ProblemTopics, Topics } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getFirstRecord } from "@/lib/functions/getFirstRecord";

interface Props {
    params: {
        problemID: string;
    };
}

export default async function Component({ params }: Props) {

    const problem = getFirstRecord(
        await db
            .select()
            .from(Problems)
            .where(eq(Problems.id, parseInt(params.problemID)))
    );
    if (!problem) {
        return <div>Problem not found</div>;
    }

    const topics = await db
        .select()
        .from(ProblemTopics)
        .innerJoin(Topics, eq(ProblemTopics.problem_id, Topics.id))
        .where(eq(ProblemTopics.problem_id, problem.id));

    const topicNames = topics.map((topic) => topic.Topics.name);

    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-lg border min-w-full min-h-screen"
        >
            <ResizablePanel defaultSize={40}>
                {/* contains static data for now */}
                <QuestionDesc
                    question={problem.statement!}
                    name={problem.name!}
                    difficulty={problem.difficulty!}
                    topics={topicNames}
                />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={60}>
                <CodeEditor />
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
