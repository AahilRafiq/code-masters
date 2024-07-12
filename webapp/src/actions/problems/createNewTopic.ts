"use server";
import { actionResponseObj } from "@/lib/functions/actionResponseHelpers";
import { Topics } from "@/db/schema";
import { db } from "@/db/db";
import { getFirstRecord } from "@/lib/functions/getFirstRecord";
import { InferSelectModel } from "drizzle-orm";
import { actionRes } from "@/types/actionRes";

type Topic = InferSelectModel<typeof Topics>;

export async function createNewTopic(name: string): Promise<actionRes<Topic>> {
    if (name.length < 2) return actionResponseObj(false, "Name too short");

    try {
        const res = getFirstRecord(
            await db
                .insert(Topics)
                .values({
                    name: name,
                })
                .returning()
        );

        return actionResponseObj(true, "", res);
    } catch (err) {
        console.log(err);
        return actionResponseObj(false, "Internal Server Error");
    }
}
