# Usar uma imagem existente do node
FROM node:alpine
FROM mongodb/atlas:latest

# Configurar o caminho dentro do container
WORKDIR /usr/src/app

# Copiar os arquivos
COPY package*.json ./

# Executar npm install 
RUN npm install

# Copiar o resto da aplicação
COPY . .

# Expor a porta 
EXPOSE 3000

CMD ["npm", "start"]