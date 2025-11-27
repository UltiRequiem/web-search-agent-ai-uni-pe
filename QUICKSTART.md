# Guía de Inicio Rápido

Esta guía te ayudará a poner en marcha el proyecto en menos de 5 minutos.

## Paso 1: Verificar Requisitos

Asegúrate de tener Node.js v20 o superior instalado:

```bash
node --version
```

## Paso 2: Instalar Dependencias

```bash
npm install
```

## Paso 3: Configurar API Keys

1. Copia el archivo de ejemplo:
```bash
cp .env.example .env
```

2. Edita `.env` y agrega al menos una clave API:

```env
OPENAI_API_KEY=sk-...
```

**Obtener claves API:**
- OpenAI: https://platform.openai.com/api-keys
- Google AI: https://aistudio.google.com/app/apikey
- Exa: https://exa.ai/

## Paso 4: Probar el Agente

### Opción A: Ejemplo Simple

```bash
npm run example:simple
```

Esto ejecuta una búsqueda básica usando el agente de OpenAI.

### Opción B: Interfaz Visual (Mastra Studio)

```bash
npm run mastra:dev
```

Abre http://localhost:3000 en tu navegador.

### Opción C: Comparar Todos los Agentes

```bash
npm run example:compare
```

Compara los resultados de OpenAI, Gemini y Exa.

## Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Ejecuta el ejemplo principal |
| `npm run mastra:dev` | Abre la interfaz visual |
| `npm run example:simple` | Ejemplo de búsqueda simple |
| `npm run example:compare` | Compara los 3 agentes |
| `npm run build` | Compila el proyecto |
| `npm start` | Ejecuta la versión compilada |

## Modificar las Búsquedas

### Cambiar la consulta en el ejemplo simple:

Edita [src/examples/simple-search.ts](src/examples/simple-search.ts):

```typescript
const query = "Tu consulta aquí";
```

### Cambiar el agente:

Reemplaza `searchAgentOpenAI` por:
- `searchAgentGemini` - Para usar Google Gemini
- `searchAgentExa` - Para usar Exa

## Estructura de Archivos Importantes

```
src/
├── mastra/
│   ├── agents/          # Definición de agentes
│   ├── tools/           # Herramientas personalizadas
│   └── index.ts         # Configuración Mastra
├── examples/            # Ejemplos de uso
└── index.ts             # Punto de entrada principal
```

## Solución de Problemas Comunes

### Error: "Missing API key"
➜ Verifica que el archivo `.env` existe y contiene las claves correctas

### Error: "Cannot find module"
➜ Ejecuta `npm install` nuevamente

### El agente no responde
➜ Verifica tu conexión a internet y que las claves API sean válidas

## Siguiente Paso

Consulta el [README.md](README.md) completo para documentación detallada.
