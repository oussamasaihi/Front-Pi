pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Angular App') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Docker Build and Push') {
            steps {
                script {
                    def appVersion = sh(script: 'cat package.json | jq -r .version', returnStdout: true).trim()
                    def imageName = "oussama/angular-app:${appVersion}"
                    
                    docker.build(imageName, '.')
                    
                    // Push the Docker image to Docker Hub
                    docker.image(imageName).push()
                }
            }
        }
    }
}

