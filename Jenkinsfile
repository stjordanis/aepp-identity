pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.ci'
    }
  }

  stages {

    stage('Build') {
      steps {
        sh 'npm run build'
        archiveArtifacts artifacts: 'build/*', fingerprint: true
      }
    }

    stage('Build Native') {
      steps {
        sh 'cordova platform add android'
        sh 'npm run build:android'
        archiveArtifacts artifacts: 'platforms/android/**/*.apk', fingerprint: true
      }
    }

  }
}
