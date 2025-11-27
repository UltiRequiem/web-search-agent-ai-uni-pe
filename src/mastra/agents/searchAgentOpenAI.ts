import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";

/**
 * Search Agent using OpenAI's native web search tool
 *
 * This agent uses GPT-4o-mini with built-in web search capabilities.
 * It can search the web directly without requiring additional API integrations.
 */
export const searchAgentOpenAI = new Agent({
  name: "Search Agent OpenAI",
  instructions: `You are a web search agent specialized in finding and summarizing information from the internet.

Your capabilities:
- Search the web for current information
- Provide accurate, up-to-date answers
- Cite your sources
- Summarize complex information clearly

Always verify information from multiple sources when possible and provide context for your answers.`,
  model: "openai/gpt-4o-mini",
  tools: {
    webSearch: openai.tools.webSearch(),
  },
});
