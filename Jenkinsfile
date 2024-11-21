pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Cloner le dépôt GitHub depuis la branche master
                git branch: 'master', url: 'https://github.com/RamlaDardouri/Gestion-reservation.git'
            }
        }
        stage('Build') {
            steps {
                // Construire l'image Docker
                sh 'docker build -t gestion-reservation .'
            }
        }
        stage('Test') {
            steps {
                // Exécuter les tests
                sh 'docker run --rm gestion-reservation npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Déployer l'application avec Docker Compose
                sh 'docker-compose up -d'
            }
        }
    }
}
