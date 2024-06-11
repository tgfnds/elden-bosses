// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { InferInsertModel, sql, type InferSelectModel } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `elden-bosses_${name}`);

export const bosses = createTable(
  "boss",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name", { length: 256 }),
    type: text("type", { enum: ["boss", "great", "invasion", "legendary"] }),
    region: text("region", {
      enum: [
        "Limgrave",
        "Weeping Peninsula",
        "Liurnia of the Lakes",
        "Altus Plateau",
      ],
    }),
    location: text("location", { length: 256 }).notNull(),
    hard: int("hard", { mode: "boolean" }).default(false),
    night: int("night", { mode: "boolean" }).default(false),
    extra: text("extra", { length: 256 }),
    beaten: int("beaten", { mode: "boolean" }).default(false),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: int("updatedAt", { mode: "timestamp" }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export type Boss = InferSelectModel<typeof bosses>;
export type InsertBoss = InferInsertModel<typeof bosses>;
