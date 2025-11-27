import { mastra } from "./mastra";
import "dotenv/config";

/**
 * Main entry point for the Web Search Agent
 *
 * This demonstrates how to use the different search agents.
 * Uncomment the agent you want to test.
 */
async function main() {
  console.log("🤖 Web Search Agent - Universidad Nacional de Ingeniería\n");

  // Example query
  const query = "What are the latest developments in artificial intelligence?";

  console.log(`Query: "${query}"\n`);

  // Choose which agent to use by uncommenting one of the following:

  // Option 1: OpenAI native search
  console.log("Using OpenAI Search Agent...\n");
  const result = await mastra.agents.searchAgentOpenAI.text({
    messages: [{ role: "user", content: query }],
  });

  // Option 2: Google Gemini native search
  // console.log("Using Gemini Search Agent...\n");
  // const result = await mastra.agents.searchAgentGemini.text({
  //   messages: [{ role: "user", content: query }],
  // });

  // Option 3: Exa custom search
  // console.log("Using Exa Search Agent...\n");
  // const result = await mastra.agents.searchAgentExa.text({
  //   messages: [{ role: "user", content: query }],
  // });

  console.log("Response:");
  console.log(result.text);
  console.log("\n✅ Done!");
}

// Run the main function
main().catch((error) => {
  console.error("❌ Error:", error);
  process.exit(1);
});
