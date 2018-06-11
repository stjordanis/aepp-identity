pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.ci'
    }
  }

  stages {

    stage('Build') {
      steps {
        sh 'ls $WORKSPACE'
        archiveArtifacts artifacts: '$WORKSPACE/app/platforms/android/build/outputs/apk/android-debug.apk', fingerprint: true
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
