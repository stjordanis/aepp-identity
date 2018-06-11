pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.ci'
    }
  }

  stages {

    stage('Build') {
      steps {
        def workspace = pwd()
        sh 'copy /app/platforms/android/build/outputs/apk/android-debug.apk ${workspace}/android-debug.apk'
        archiveArtifacts artifacts: 'android-debug.apk', fingerprint: true
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
