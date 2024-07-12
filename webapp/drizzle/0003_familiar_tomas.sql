DROP TABLE "Testcases";--> statement-breakpoint
ALTER TABLE "Problems" ADD COLUMN "name" text;--> statement-breakpoint
ALTER TABLE "Problems" ADD COLUMN "testcase" text;--> statement-breakpoint
ALTER TABLE "Problems" ADD COLUMN "expected_output" text;