# USAMOS UNA IMAGEN BASE LIGERA DE NODE.JS
# Esto cumple con la eficiencia requerida por la arquitectura [cite: 329]
FROM node:20-alpine

# DIRECTORIO DE TRABAJO
WORKDIR /app

# COPIAMOS LOS ARCHIVOS DE DEPENDENCIAS
COPY package*.json ./

# INSTALAMOS LAS DEPENDENCIAS
RUN npm install

# COPIAMOS EL RESTO DEL CÓDIGO FUENTE (TS y Mastra logic)
COPY . .

# CONSTRUIMOS LA APLICACIÓN
# TypeScript necesita ser transpilado a JavaScript para correr en producción [cite: 261, 285]
RUN npm run build

# EXPONEMOS EL PUERTO (Railway lo detecta, pero es buena práctica)
EXPOSE 3000

# COMANDO DE INICIO
CMD ["npm", "start"]
