pipeline {
    agent {
        dockerfile {
      		filename 'Dockerfile.ci'
      		args '-v /etc/group:/etc/group:ro ' +
           	     '-v /etc/passwd:/etc/passwd:ro ' +
           	     '-v /var/lib/jenkins:/var/lib/jenkins' +
           	     '-v /usr/bin/docker:/usr/bin/docker:ro ' +
           	     '--network=host' 
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

	    stage('Android Build') {
            steps {
                sh 'docker-compose -H localhost:2376 build'
                sh 'docker-compose -H localhost:2376 cordova platform add android'
                sh 'docker-compose -H localhost:2376 npm run build:android'
                sh 'docker-compose -H localhost:2376 npm run gen:cordova-resources'
            }
        }
    }

    post {
    	always {
            	archiveArtifacts artifacts: 'platforms/**/*.apk', fingerprint: true
                sh 'docker-compose -H localhost:2376 down -v ||:'
    	}
    }
}