pipeline {
  agent any
  environment {
    IMAGE = 'adinan01/devops-app'
  }
  stages {
    stage('Build Image') {
      steps {
        sh 'docker build -t $IMAGE:$BUILD_NUMBER -t $IMAGE:latest app/'
      }
    }
    stage('Push to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
          sh 'echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin'
          sh 'docker push $IMAGE:$BUILD_NUMBER'
          sh 'docker push $IMAGE:latest'
        }
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker compose -f docker/docker-compose.yml pull'
        sh 'docker compose -f docker/docker-compose.yml up -d'
      }
    }
  }
}
