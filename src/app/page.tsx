import { BossesBeaten } from "~/app/_components/BossesBeaten";
import { BossesList } from "~/app/_components/BossesList";
import { api } from "~/trpc/server";

export default async function Home() {
  const bosses = await api.boss.getAll();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="container flex flex-col gap-2 px-4 py-16">
        <BossesBeaten bosses={bosses} />
        <BossesList bosses={bosses} />
      </div>
    </main>
  );
}
