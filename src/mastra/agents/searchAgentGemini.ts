import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core/agent";

/**
 * Search Agent using Google Gemini's native search tool
 *
 * This agent uses Gemini 2.5 Flash with built-in Google Search capabilities.
 * It leverages Google's search infrastructure for real-time information.
 */
export const searchAgentGemini = new Agent({
  name: "Search Agent Gemini",
  instructions: `You are a web search agent powered by Google's search capabilities.

Your role:
- Search the web using Google's infrastructure
- Provide accurate, timely information
- Cite sources and provide links
- Explain complex topics in accessible language

Focus on providing comprehensive yet concise answers based on current web information.`,
  model: "google/gemini-2.5-flash",
  tools: {
    webSearch: google.tools.googleSearch(),
  },
});
