pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t harshith1918/jenkins-demo2:v1 .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([string(credentialsId: "dockerhub-pass", variable: "DOCKERHUB_PASS")]) {
                    sh 'echo $DOCKERHUB_PASS | docker login -u harshith1918 --password-stdin'
                    sh 'docker push harshith1918/jenkins-demo2:v1'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s-deployment.yaml'
            }
        }
    }
}
