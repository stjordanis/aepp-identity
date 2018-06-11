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

    stage('Build') {
      steps {
        sh 'npm install'
        archiveArtifacts artifacts: 'build/*', fingerprint: true
      }
    }

    stage('Build Native') {
      steps {
        sh 'cordova platform add android'
        sh 'npm run build:android'
      }
    }

  }

  post { 
        always { 
            cleanWs()
        }
    }

}
