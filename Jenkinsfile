pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.ci'
      args '-v /etc/group:/etc/group:ro ' +
           '-v /etc/passwd:/etc/passwd:ro ' +
           '-v /var/lib/jenkins:/var/lib/jenkins'
    }
  }

  stage('Build') {
      steps {
        sh 'cordova-splash && cordova-icon'
        sh 'cordova build android'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'platforms/**/*.apk', fingerprint: true
    }
  }
}
