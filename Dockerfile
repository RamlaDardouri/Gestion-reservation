# Utilisez l'image officielle de Node.js 18
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Installer nodemon globalement
RUN npm install -g nodemon

# Copier le reste des fichiers du projet dans le conteneur
COPY . .

# Exposer le port 4000 du conteneur à l'extérieur
EXPOSE 4000

# Démarrer l'application avec nodemon
CMD ["nodemon", "app.js"]
