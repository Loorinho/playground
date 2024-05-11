import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  hospitals: defineTable({ name: v.string() }),
  staff: defineTable({
    name: v.string(),
    email: v.string(),
    hostpital_id: v.id("hospitals"),
  }),
  invites: defineTable({
    // staffId: v.id("staff"),
    email: v.string(),
    hospital_id: v.id("hospitals"),
    token: v.string(),
  }).index("by_staffEmail", ["email"]),
});
