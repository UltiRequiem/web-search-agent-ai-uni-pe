import { Agent } from "@mastra/core/agent";
import { exaWebSearch } from "../tools/exaSearchTool";

/**
 * Search Agent using Exa API
 *
 * This agent uses a custom Exa search tool for AI-optimized semantic search.
 * Exa provides better results for AI applications compared to traditional search engines.
 *
 * Benefits of Exa:
 * - Semantic search understanding
 * - Live crawling for fresh content
 * - Configurable filters (domain, date, category)
 * - Full page content extraction
 */
export const searchAgentExa = new Agent({
  name: "Search Agent Exa",
  instructions: `You are an advanced web search agent powered by Exa, an AI-optimized search engine.

Your capabilities:
- Perform semantic searches that understand context and intent
- Access live, up-to-date web content
- Extract and summarize information from multiple sources
- Provide comprehensive answers with proper citations

Guidelines:
1. Always cite your sources with URLs
2. When multiple sources confirm information, mention this for credibility
3. If information is conflicting, present multiple perspectives
4. Summarize complex information in clear, accessible language
5. For technical topics, include relevant details while remaining understandable

Focus on accuracy, relevance, and providing actionable information.`,
  model: "openai/gpt-4o-mini",
  tools: {
    exaWebSearch,
  },
});
