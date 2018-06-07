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
        sh 'echo test'
      }
    }
  }

  post {
    always {
      archive '/app/platforms/android/app/build/outputs/apk/debug/app-debug.apk'
    }
  }
}
