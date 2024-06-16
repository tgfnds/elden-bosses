import { Fragment } from "react";

import { ToggleBeaten } from "~/app/_components/ToggleBeaten";
import type { Boss } from "~/server/db/schema";

interface Props {
  bosses: Boss[];
}

export function BossesList({ bosses }: Props) {
  return (
    <div className="grid grid-cols-[auto_auto_1fr_auto_auto_auto] items-center gap-x-6 gap-y-0.5 tracking-wide">
      {headers.map((header, idx) => (
        <p key={`header-${idx}`} className="text-primary">
          {header}
        </p>
      ))}
      {bosses.map((boss) => (
        <Fragment key={`boss-${boss.id}`}>
          <ToggleBeaten id={boss.id} beaten={boss.beaten ?? false} />
          <p>{boss.id}</p>
          <p className={boss.beaten ? "text-neutral-400 line-through" : ""}>
            {boss.name}
            {boss.hard && (
              <span className="font-semibold text-red-500"> H</span>
            )}
            {boss.night && (
              <span className="font-semibold text-indigo-500"> N</span>
            )}
          </p>
          <p>{boss.region}</p>
          <p>{boss.location}</p>
          <p>{boss.extra}</p>
        </Fragment>
      ))}
    </div>
  );
}

const headers = ["", "#", "Name", "Region", "Location", "Extra"] as const;
