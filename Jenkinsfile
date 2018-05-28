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
	/*
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
	*/
	stage('Test') {
            steps {
                sh 'npm run unit'
                /* sh 'npm run e2e' */
            }
        }
	stage('Android Build') {
            steps {
                sh 'npm run gen:cordova-resources'
		sh 'npm run build:android'
            }
        }
    }
}