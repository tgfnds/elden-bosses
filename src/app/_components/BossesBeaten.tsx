"use client";

import { useMemo } from "react";

import type { Boss } from "~/server/db/schema";

interface Props {
  bosses: Boss[];
}

export function BossesBeaten({ bosses }: Props) {
  const bossesBeaten = useMemo(() => {
    return bosses.filter((boss) => boss.beaten).length;
  }, [bosses]);

  return (
    <p className="text-lg font-semibold tracking-wide text-primary">
      {bossesBeaten}
      <span className="text-sm text-neutral-400">
        {" "}
        of {bosses.length} beaten
      </span>
    </p>
  );
}
