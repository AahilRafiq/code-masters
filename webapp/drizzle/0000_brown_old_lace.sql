DO $$ BEGIN
 CREATE TYPE "public"."difficulty" AS ENUM('easy', 'medium', 'hard');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('user', 'admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ProblemTopics" (
	"id" serial PRIMARY KEY NOT NULL,
	"problem_id" integer,
	"topic_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Problems" (
	"id" serial PRIMARY KEY NOT NULL,
	"statement" text,
	"difficulty" "difficulty",
	"explanation" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"problem_id" integer,
	"success" boolean,
	"timestamp" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "testcases" (
	"id" serial PRIMARY KEY NOT NULL,
	"problem_id" integer,
	"testcase" text,
	"expected_output" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Topics" (
	"id" serial PRIMARY KEY NOT NULL,
	"topic" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Users" (
	"id" serial PRIMARY KEY NOT NULL,
	"role" "role",
	"username" text,
	"email" text,
	"display_name" text,
	"password" text,
	CONSTRAINT "Users_username_unique" UNIQUE("username"),
	CONSTRAINT "Users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ProblemTopics" ADD CONSTRAINT "ProblemTopics_problem_id_Problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."Problems"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ProblemTopics" ADD CONSTRAINT "ProblemTopics_topic_id_Topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."Topics"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "submissions" ADD CONSTRAINT "submissions_user_id_Users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."Users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "submissions" ADD CONSTRAINT "submissions_problem_id_Problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."Problems"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "testcases" ADD CONSTRAINT "testcases_problem_id_Problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."Problems"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
