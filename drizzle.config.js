/** @type {import("drizzle-kit").Config} */
export default {
  schema: "./utils/schema.js", // ahi schema add krvano jo change kru to
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-interview-mocker_owner:q3x0MymiRulT@ep-lively-bread-a1k8t5cf.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require", // Ensure DB_URL is set in your .env file
  },
};
