pipeline {
    agent {
        dockerfile {
      		filename 'Dockerfile.ci'
      		args '-v /etc/group:/etc/group:ro ' +
           	     '-v /etc/passwd:/etc/passwd:ro ' +
                     '-v /var/lib/jenkins:/var/lib/jenkins '
    	}
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'apt-get update && apt-get install -y python build-essential'
		sh 'npm install'
            }
        }

	stage('Test') {
            steps {
                sh 'npm run lint'
                sh 'npm run unit'
                /* sh 'npm run e2e' */
            }
        }

	stage('Test') {
            steps {
                sh 'npm run lint'
                sh 'npm run unit'
                /* sh 'npm run e2e' */
            }
        }
	stage('Native Build') {
            steps {
                sh 'npm run gen:cordova-resources'
		sh 'npm run build:android'
            }
        }
    }
}