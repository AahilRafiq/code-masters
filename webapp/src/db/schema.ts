import { pgTable, pgEnum, text, serial, boolean, timestamp, integer } from "drizzle-orm/pg-core";

/* ENUMS */
export const roleEnum = pgEnum("role", ["user", "admin"]);
export const difficultyEnum = pgEnum("difficulty", ["easy", "medium", "hard"]);

/* TABLES */
export const Users = pgTable("Users", {
  id: serial("id").primaryKey(),
  role: roleEnum("role"),
  username: text("username").unique(),
  email: text("email").unique(),
  display_name: text("display_name"),
  password: text("password")
});

export const Problems = pgTable("Problems", {
  id: serial("id").primaryKey(),
  name: text("name"),
  statement: text("statement"),
  difficulty: difficultyEnum("difficulty"),
  testcase: text("testcase"),
  expected_output: text("expected_output"),
  explanation: text("explanation")
});

export const Topics = pgTable("Topics", {
  id: serial("id").primaryKey(),
  name: text("name")
});

export const ProblemTopics = pgTable("ProblemTopics", {
  id: serial("id").primaryKey(),
  problem_id: integer("problem_id").references(() => Problems.id),
  topic_id: integer("topic_id").references(() => Topics.id)
});

export const Submissions = pgTable("Submissions", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id").references(() => Users.id),
  problem_id: integer("problem_id").references(() => Problems.id),
  success: boolean("success"),
  timestamp: timestamp("timestamp")
});
