"use server";

import { db } from "@/db/db";
import { actionResponseObj } from "@/lib/functions/actionResponseHelpers";
import { InferSelectModel } from "drizzle-orm";
import { ProblemTopics, Problems, Topics } from "@/db/schema";
import { getFirstRecord } from "@/lib/functions/getFirstRecord";
import type { actionRes } from "@/types/actionRes";

type Topic = InferSelectModel<typeof Topics>;

export async function createNewProblem(
    name: string,
    difficulty: "easy" | "medium" | "hard",
    topics: Topic[],
    statement: string,
    testcase: string,
    output: string,
    solution: string
): Promise<actionRes<null>> {
    try {
        const problem = getFirstRecord(
            await db
                .insert(Problems)
                .values({
                    name,
                    difficulty,
                    statement,
                    testcase,
                    expected_output: output,
                    explanation: solution,
                })
                .returning()
        );

        const problemTopicsArray = topics.map((topic) => {
            return {
                topic_id: topic.id,
                problem_id: problem.id,
            };
        });

        await db.insert(ProblemTopics).values(problemTopicsArray);
        return actionResponseObj(true);
    } catch (err) {
        console.log(err);
        return actionResponseObj(false, "Internal Server Error");
    }
}
