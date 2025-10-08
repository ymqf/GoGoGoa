export const apiKey = process.env.OPENAI_API_KEY || process.env.OPENAI_KEY || "";

if (!apiKey) {
  // 在构建或本地运行时提醒开发者设置环境变量
  // 不要在生产中抛出错误，以避免构建阶段泄露敏感信息
  console.warn("Warning: OPENAI_API_KEY is not set. API requests will fail without a valid key.");
}
