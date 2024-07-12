import Link from "next/link"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { BetweenVerticalStartIcon , BinaryIcon , BracketsIcon , CodeIcon ,GitGraphIcon ,  GripIcon , ListTreeIcon , PlusIcon , PuzzleIcon , XIcon , TreesIcon} from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">CodeMasters</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Practice
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Leaderboard
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-4 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-2">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elevate Your Coding Skills with CodeMasters
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Practice a wide range of coding problems, from beginner to advanced, and unlock your true potential
                    as a developer.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Start Practicing
                  </Link>
                </div>
              </div>
              <Image
                src="/landing-cover.svg"
                width="200"
                height="100"
                alt="Hero"
                className="mx-auto max-w-lg aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Practice by Topics</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from a wide range of coding topics to practice and improve your skills.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="flex flex-col items-start gap-2">
                  <BracketsIcon className="h-8 w-8 text-primary mt-4" />
                  <CardTitle>Arrays</CardTitle>
                  <CardDescription>
                    Practice problems related to arrays, such as sorting, searching, and manipulation.
                  </CardDescription>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Practice
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-2">
                  <ListTreeIcon className="h-8 w-8 text-primary mt-4" />
                  <CardTitle>Linked Lists</CardTitle>
                  <CardDescription>
                    Improve your skills in working with linked lists, including traversal, insertion, and deletion.
                  </CardDescription>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Practice
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-2">
                  <TreesIcon className="h-8 w-8 text-primary mt-4" />
                  <CardTitle>Trees</CardTitle>
                  <CardDescription>
                    Explore various tree data structures and practice problems related to them.
                  </CardDescription>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Practice
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-2">
                  <GitGraphIcon className="h-8 w-8 text-primary mt-4" />
                  <CardTitle>Graphs</CardTitle>
                  <CardDescription>
                    Dive into graph data structures and practice problems related to graph traversal and algorithms.
                  </CardDescription>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Practice
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-2">
                  <PuzzleIcon className="h-8 w-8 text-primary mt-4" />
                  <CardTitle>Dynamic Programming</CardTitle>
                  <CardDescription>
                    Enhance your problem-solving skills by practicing dynamic programming techniques.
                  </CardDescription>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Practice
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-2">
                  <GripIcon className="h-8 w-8 text-primary mt-4" />
                  <CardTitle>Greedy Algorithms</CardTitle>
                  <CardDescription>
                    Explore and practice problems that can be solved using greedy algorithms.
                  </CardDescription>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Practice
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-4 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Practice by Difficulty</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the difficulty level that suits your current skill level and start practicing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="flex flex-col items-start gap-2">
                  <BetweenVerticalStartIcon className="h-8 w-8 text-primary mt-4" />
                  <CardTitle>Beginner</CardTitle>
                  <CardDescription>
                    Start your coding journey with easy-to-solve problems designed for beginners.
                  </CardDescription>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Practice
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-2">
                  <BinaryIcon className="h-8 w-8 text-primary mt-4" />
                  <CardTitle>Intermediate</CardTitle>
                  <CardDescription>
                    Challenge yourself with moderately difficult problems to improve your coding skills.
                  </CardDescription>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Practice
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-2">
                  <PlusIcon className="h-8 w-8 text-primary mt-4" />
                  <CardTitle>Advanced</CardTitle>
                  <CardDescription>
                    Test your problem-solving skills with complex problems designed for experienced developers.
                  </CardDescription>
                  <Link
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Practice
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 CodeMasters. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}