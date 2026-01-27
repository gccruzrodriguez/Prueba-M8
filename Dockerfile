#imagen base ligera de Node.js
FROM node:18-alpine

#establecer directorio de trabajo
WORKDIR /app

#copiar archivos de dependencias e instalar solo produccion
COPY package*.json ./
RUN npm install --production

##copiar el resto del codigo fuente
COPY . .

#exponer el puerto en el que corre NestJS/Express
EXPOSE 3000

#comando de arranque
CMD ["node", "dist/app.js"]
