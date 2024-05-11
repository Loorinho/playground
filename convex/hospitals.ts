import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createHospital = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("hospitals", { name: args.name });
  },
});
