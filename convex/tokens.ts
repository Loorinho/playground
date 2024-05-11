import { ConvexError, v } from "convex/values";
import { internalMutation } from "./_generated/server";

function generateToken() {
  const array = new Uint8Array(16);

  crypto.getRandomValues(array);

  const token = Array.from(array, (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");

  return token;
}

export const createToken = internalMutation({
  args: { hospitalId: v.id("hospitals"), email: v.string() },

  handler: async (ctx, args) => {
    const invite = await ctx.db
      .query("invites")
      .withIndex("by_staffEmail", (q) => q.eq("email", args.email))
      .first();

    if (invite) {
      throw new ConvexError("UInvite already sent to this staff member ");
    }

    const token = generateToken();
    await ctx.db.insert("invites", {
      email: args.email,
      hospital_id: args.hospitalId,
      token: token,
    });

    return token;
  },
});
