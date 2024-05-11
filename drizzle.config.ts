import { Config, defineConfig } from "drizzle-kit";
export default {
  schema: "./src/drizzle/database/schema.ts",
  out: "./src/drizzle/database/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://playground:playground@localhost:5469/playground",
  },
  verbose: true,
  strict: true,
} satisfies Config;
