pipeline {
  agent any

  options {
    timestamps()
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Backend Dependencies') {
      steps {
        dir('backend') {
          sh 'npm ci'
        }
      }
    }

    stage('Run Backend Tests') {
      steps {
        dir('backend') {
          sh 'npm test'
        }
      }
    }

    stage('Validate Compose') {
      steps {
        sh 'docker compose config'
      }
    }

    stage('Build Docker Images') {
      steps {
        sh 'docker compose build'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker compose up -d'
      }
    }
  }

  post {
    success {
      echo 'Department store app deployed on port 8080'
    }
    failure {
      sh 'docker compose logs --no-color || true'
    }
  }
}
