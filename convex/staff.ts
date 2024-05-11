import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createStaff = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    hospitalId: v.id("hospitals"),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("staff", {
      name: args.name,
      email: args.email,
      hostpital_id: args.hospitalId,
    });
  },
});
