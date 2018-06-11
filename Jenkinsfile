pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.ci'
    }
  }
    stage('Archive Artifacts') {
      steps {
        sh 'cp /app/platforms/android/build/outputs/apk/android-debug.apk $WORKSPACE/android-debug.apk'
        archiveArtifacts artifacts: 'android-debug.apk', fingerprint: true
      }
    }
  }
}
