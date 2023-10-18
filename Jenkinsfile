pipeline {
    agent any
    environment {
        DOCKER_CRED = credentials('auth_token')
        registry = "raghuramdevopsengineer"
        // user = "raghuramdevopsengineer"
        // pwd = "Devops@777*"
        
    }
    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    bat 'docker-compose build'
                    bat 'docker images'
                    bat "docker tag kubernetes-cluster-react:latest ${registry}/react:${env.BUILD_NUMBER}"
                    bat "docker tag kubernetes-cluster-node:latest ${registry}/node:${env.BUILD_NUMBER}"
                    bat 'docker images'
                    bat "docker rmi kubernetes-cluster-react:latest"
                    bat "docker rmi kubernetes-cluster-node:latest"
                }
            }
        }
        stage('Push Docker Images to docker hub') {
            steps {
                script {
                    // bat 'docker logout'
                    // bat 'del C:\\Users\\raghuram\\.docker\\config.json'
                    // bat 'echo "$DOCKER_CRED_PSW" | docker login -u $DOCKER_CRED_USR --password-stdin https://index.docker.io/v1/'
                    bat 'echo $DOCKER_CRED_PSW | docker login -u $DOCKER_CRED_USR --password-stdin'
                    bat "docker image push ${registry}/react:${env.BUILD_NUMBER}"
                    bat "docker image push ${registry}/node:${env.BUILD_NUMBER}"
                }
            }
        }
        // stage('Deploy to AKS') {
        //     steps {
        //         script {
        //             sh "az login"
        //             sh "az aks get-credentials --name ${AKS} --resource-group ${RG}"
        //             sh "kubectl create secret docker-registry ${secret} --docker-server=${registryUrl} --docker-username=${user} --docker-password=${pwd}  --docker-email=${id}"
        //             sh "kubectl apply -f deployment.yml"
        //             sh "kubectl set image deployment/node-deployment node=${registryUrl}/aks-deployment-node:${env.BUILD_NUMBER}"
        //             sh "kubectl set image deployment/react-deployment react=${registryUrl}/aks-deployment-react:${env.BUILD_NUMBER}"
                    

        //         }
        //     }
        // }
    }
}