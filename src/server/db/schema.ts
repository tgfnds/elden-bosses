import { sql, type InferInsertModel, type InferSelectModel } from "drizzle-orm";
import {
  boolean,
  index,
  pgTableCreator,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `elden-bosses_${name}`);

export const bosses = createTable(
  "boss",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 256 }),
    type: text("type", { enum: ["boss", "great", "invasion", "legendary"] }),
    region: text("region", {
      enum: [
        "Limgrave",
        "Weeping Peninsula",
        "Liurnia of the Lakes",
        "Altus Plateau",
        "Caelid",
        "Mt. Gelmir & Volcano Manor",
      ],
    }),
    location: varchar("location", { length: 256 }).notNull(),
    hard: boolean("hard").default(false),
    night: boolean("night").default(false),
    extra: varchar("extra", { length: 256 }),
    beaten: boolean("beaten").default(false),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (self) => ({
    nameIndex: index("elden_boss_name_idx").on(self.name),
  }),
);

export type Boss = InferSelectModel<typeof bosses>;
export type InsertBoss = InferInsertModel<typeof bosses>;
