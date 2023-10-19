pipeline {
    agent any
    environment {
        DOCKER_CRED = credentials('Docker_hub_token')
        registry = "raghuramdevopsengineer/reactapp"
        registrys = "raghuramdevopsengineer/nodeapp"
        
    }
    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    bat 'docker-compose build'
                    bat 'docker images'
                    bat "docker tag multicontainerapplication-react:latest ${registry}:${env.BUILD_NUMBER}"
                    bat "docker tag multicontainerapplication-node:latest ${registrys}:${env.BUILD_NUMBER}"
                    bat 'docker images'
                    bat "docker rmi multicontainerapplication-react:latest"
                    bat "docker rmi multicontainerapplication-node:latest"
                }
            }
        }
        stage('Push Docker Images to docker hub') {
            steps {
                script {
                    // bat 'docker logout'
                    // bat 'del C:\\Users\\raghuram\\.docker\\config.json'
                    // bat 'echo "$DOCKER_CRED_PSW" | docker login -u $DOCKER_CRED_USR --password-stdin https://index.docker.io/v1/'
                    // bat 'echo "$DOCKER_CRED_PSW"| docker login -u $DOCKER_CRED_USR --password-stdin'
                    // bat 'docker login -u $DOCKER_CRED_USR --password-stdin'
                    bat 'docker login -u $DOCKER_CRED_USR -p $DOCKER_CRED_PSW'
                    bat "docker image push ${registry}:${env.BUILD_NUMBER}"
                    bat "docker image push ${registrys}:${env.BUILD_NUMBER}"
                }
            }
        }
        
    }
}