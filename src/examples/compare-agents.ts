import { mastra } from "../mastra";
import "dotenv/config";

/**
 * Comparación de los tres agentes de búsqueda
 *
 * Este ejemplo ejecuta la misma consulta en los tres agentes diferentes
 * y muestra los resultados para comparar sus capacidades.
 */

async function compareAgents() {
  const query = "¿Qué es la computación cuántica?";

  console.log("🔬 Comparación de Agentes de Búsqueda Web\n");
  console.log("=".repeat(60));
  console.log(`Consulta: "${query}"`);
  console.log("=".repeat(60) + "\n");

  // Agente 1: OpenAI
  try {
    console.log("1️⃣  AGENTE OPENAI (GPT-4o-mini con búsqueda nativa)");
    console.log("-".repeat(60));

    const resultOpenAI = await mastra.agents.searchAgentOpenAI.text({
      messages: [{ role: "user", content: query }],
    });

    console.log(resultOpenAI.text);
    console.log("\n");
  } catch (error) {
    console.error(
      "❌ Error con OpenAI:",
      error instanceof Error ? error.message : error
    );
    console.log("Asegúrate de tener OPENAI_API_KEY configurado en .env\n");
  }

  // Agente 2: Gemini
  try {
    console.log("2️⃣  AGENTE GEMINI (Gemini 2.5 Flash con Google Search)");
    console.log("-".repeat(60));

    const resultGemini = await mastra.agents.searchAgentGemini.text({
      messages: [{ role: "user", content: query }],
    });

    console.log(resultGemini.text);
    console.log("\n");
  } catch (error) {
    console.error(
      "❌ Error con Gemini:",
      error instanceof Error ? error.message : error
    );
    console.log(
      "Asegúrate de tener GOOGLE_GENERATIVE_AI_API_KEY configurado en .env\n"
    );
  }

  // Agente 3: Exa
  try {
    console.log("3️⃣  AGENTE EXA (Búsqueda personalizada optimizada para IA)");
    console.log("-".repeat(60));

    const resultExa = await mastra.agents.searchAgentExa.text({
      messages: [{ role: "user", content: query }],
    });

    console.log(resultExa.text);
    console.log("\n");
  } catch (error) {
    console.error(
      "❌ Error con Exa:",
      error instanceof Error ? error.message : error
    );
    console.log("Asegúrate de tener EXA_API_KEY configurado en .env\n");
  }

  console.log("=".repeat(60));
  console.log("✅ Comparación completada");
  console.log("=".repeat(60));
}

// Ejecutar la comparación
compareAgents();
