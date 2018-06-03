pipeline {
    agent {
        dockerfile {
      		filename 'Dockerfile.ci'
   	}
    }
    stages {
	stage('Build') {
            steps {
        	    sh 'ln -sf /node_modules ./'
                sh 'npm run build'
            }
        }
        stage('Lint') {
            steps {
        	    sh 'ln -sf /node_modules ./'
                sh 'npm run lint'
            }
        }
	/* 
	stage('Test') {
            steps {
		
        	sh 'ln -sf /node_modules ./'
                sh 'npm run unit'
                sh 'npm run e2e'	
            }
        }
	*/
	stage('Android Build') {
            steps {
        	    sh 'ln -sf /node_modules ./'
                sh 'cordova platform add android'
		        sh 'npm run build:android'
                sh 'npm run gen:cordova-resources'
            }
        }
    }

    post {
    	always {
            	archiveArtifacts artifacts: 'platforms/**/*.apk', fingerprint: true
    	}
  }
}