pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/LulukDWiKuncoro/ci-cd-demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Build finished!"'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Deployment simulated..."
                '''
            }
        }
    }
}
