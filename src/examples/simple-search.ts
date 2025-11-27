import { mastra } from "../mastra";
import "dotenv/config";

/**
 * Ejemplo simple de búsqueda web con el agente de OpenAI
 *
 * Este archivo demuestra cómo hacer una consulta simple al agente de búsqueda.
 * Puedes modificar la consulta y el agente según tus necesidades.
 */

async function simpleSearch() {
  // Consulta de ejemplo
  const query = "¿Cuáles son las últimas noticias sobre IA en 2025?";

  console.log("🔍 Realizando búsqueda...");
  console.log(`Consulta: "${query}"\n`);

  try {
    // Usar el agente de OpenAI
    const response = await mastra.agents.searchAgentOpenAI.text({
      messages: [
        {
          role: "user",
          content: query,
        },
      ],
    });

    console.log("📝 Respuesta del agente:\n");
    console.log(response.text);
    console.log("\n✅ Búsqueda completada exitosamente!");
  } catch (error) {
    console.error(
      "❌ Error durante la búsqueda:",
      error instanceof Error ? error.message : error
    );
    process.exit(1);
  }
}

// Ejecutar la búsqueda
simpleSearch();
