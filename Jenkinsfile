pipeline {
    agent {
        docker { dockerfile true }
    }
    stages {
	stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

	stage('Test') {
            steps {
                sh 'npm run unit'
                /* sh 'npm run e2e' */
            }
        }
	stage('Build Android') {
            steps {
                sh 'npm run gen:cordova-resources'
		sh 'npm run build:android'
            }
        }
    }
}