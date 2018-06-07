pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.ci'
      args '-v /etc/group:/etc/group:ro ' +
           '-v /etc/passwd:/etc/passwd:ro ' +
           '-v /var/lib/jenkins:/var/lib/jenkins'
    }
  }

  stages {
    stage('Lint') {
      steps {
        sh 'npm i'
        sh 'npm run build:android'
        archiveArtifacts artifacts: 'platforms/**/*.apk', fingerprint: true
      }
    }
  }

}
