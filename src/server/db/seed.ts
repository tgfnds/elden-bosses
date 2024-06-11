import { createClient } from "@libsql/client";
import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/libsql";

import { bosses as bossesData } from "./data/bosses";
import { bosses, type InsertBoss } from "./schema";

dotenv.config();

if (!("DATABASE_URL" in process.env))
  throw new Error("DATABASE_URL not found on .env");

const main = async () => {
  const client = createClient({ url: process.env.DATABASE_URL! });
  const db = drizzle(client);
  const data: InsertBoss[] = [];

  for (const boss of bossesData) {
    data.push({
      ...boss,
      beaten: false,
    });
  }

  console.log("Seed start");
  await db.insert(bosses).values(data);
  console.log("Seed done");

  // Exit with success
  process.exit(0);
};

void main();
