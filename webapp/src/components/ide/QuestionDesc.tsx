// contains static data for now

export default function () {
    return (
        <div className="bg-background p-6 md:p-8 lg:p-10 flex flex-col gap-4">

            {/* Tags */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">Easy</div>
                    <div className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">Arrays</div>
                </div>
            </div>

            <h1 className="text-2xl font-bold">Two Sum</h1>
            <p className="text-muted-foreground">
                Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they
                add up to `target`.
            </p>
            <p className="text-muted-foreground">
                You may assume that each input would have exactly one solution, and you may not use the same element twice.
            </p>
            <p className="text-muted-foreground">You can return the answer in any order.</p></div>
    )
}