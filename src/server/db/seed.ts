import { createClient } from "@libsql/client";
import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/libsql";

import {
  BossRegion,
  BossSeed,
  bosses as bossesData,
  caelidBosses,
  mtGelmirAndVolcanoManor,
} from "./data/bosses";
import { bosses, type InsertBoss } from "./schema";

dotenv.config();

if (!("DATABASE_URL" in process.env))
  throw new Error("DATABASE_URL not found on .env");

const toSeed = {
  Limgrave: {
    bosses: bossesData.filter((boss) => boss.region === "Limgrave") ?? [],
    seed: false,
  },
  "Weeping Peninsula": {
    bosses: bossesData.filter((boss) => boss.region === "Weeping Peninsula"),
    seed: false,
  },
  "Liurnia of the Lakes": {
    bosses: bossesData.filter((boss) => boss.region === "Liurnia of the Lakes"),
    seed: false,
  },
  "Altus Plateau": {
    bosses: bossesData.filter((boss) => boss.region === "Altus Plateau"),
    seed: false,
  },
  Caelid: {
    bosses: caelidBosses,
    seed: true,
  },
  "Mt. Gelmir & Volcano Manor": {
    bosses: mtGelmirAndVolcanoManor,
    seed: true,
  },
} satisfies Record<BossRegion, { bosses: BossSeed[]; seed: boolean }>;

const main = async () => {
  const client = createClient({ url: process.env.DATABASE_URL! });
  const db = drizzle(client);
  const data: InsertBoss[] = [];

  for (const entry of Object.values(toSeed)) {
    if (!entry.seed) continue;
    for (const boss of entry.bosses) {
      // data.push({
      //   ...boss,
      //   beaten: false,
      // });
    }
  }

  console.log("Seed start");
  await db.insert(bosses).values(data);
  console.log("Seed done");

  // Exit with success
  process.exit(0);
};

void main();
