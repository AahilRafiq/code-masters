ALTER TABLE "submissions" RENAME TO "Submissions";--> statement-breakpoint
ALTER TABLE "testcases" RENAME TO "Testcases";--> statement-breakpoint
ALTER TABLE "Submissions" DROP CONSTRAINT "submissions_user_id_Users_id_fk";
--> statement-breakpoint
ALTER TABLE "Submissions" DROP CONSTRAINT "submissions_problem_id_Problems_id_fk";
--> statement-breakpoint
ALTER TABLE "Testcases" DROP CONSTRAINT "testcases_problem_id_Problems_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Submissions" ADD CONSTRAINT "Submissions_user_id_Users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."Users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Submissions" ADD CONSTRAINT "Submissions_problem_id_Problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."Problems"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Testcases" ADD CONSTRAINT "Testcases_problem_id_Problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."Problems"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
