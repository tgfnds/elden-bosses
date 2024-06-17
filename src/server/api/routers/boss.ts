import { eq, not } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { bosses } from "~/server/db/schema";

export const bossRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.bosses.findMany();
  }),

  toggleBeaten: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(({ ctx, input }) => {
      return ctx.db
        .update(bosses)
        .set({ beaten: not(bosses.beaten) })
        .where(eq(bosses.id, input.id));
    }),
});
