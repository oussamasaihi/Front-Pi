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
        
        stage('Docker Build and Run') {
            steps {
                script {
                    def appVersion = sh(script: 'cat package.json | jq -r .version', returnStdout: true).trim()
                    def imageName = "angular-app:${appVersion}"
                    
                    docker.build(imageName, '.')
                    docker.image(imageName).run('-p 80:80')
                }
            }
        }
    }
}

