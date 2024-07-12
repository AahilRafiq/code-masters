import { NextResponse, NextRequest } from "next/server";
import { Topics } from "@/db/schema";
import { db } from "@/db/db";
import { like } from "drizzle-orm";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get("query") || '';

    try {
        let baseQuery = db
            .select()
            .from(Topics)
            .$dynamic()

        if(query.length) baseQuery = baseQuery.where(like(Topics.name,`%${query}%`))
        const topics = await baseQuery

        return NextResponse.json({ topics: topics }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
