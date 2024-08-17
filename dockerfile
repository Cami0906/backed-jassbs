# Usa una imagen que sera la base de tu container
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /home/app

# Copia el archivo package.json e instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto para que la aplicación sea accesible
EXPOSE  5200
# este es el puerto que vamos a mapear en el contenedor, tenga encuenta que esto es igual que el mongo que la imagen viene con el puerto 27017.

# Comando para ejecutar la aplicación cuando se inicie el contenedor (con el comnado de abajo usted podra levnatar el programa)
CMD ["node", "/home/app/index.js"]
