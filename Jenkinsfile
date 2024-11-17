pipeline {
    agent { 
        docker { 
            image 'cypress/browsers:node-22.11.0-chrome-130.0.6723.116-1-ff-132.0.1-edge-130.0.2849.68-1' 
            args '-u root' // Run as root to avoid permission issues
        } 
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx cypress install'
            }
        }
        stage('Run Tests') {
            steps {
                withCredentials([string(credentialsId: 'CYPRESS_RECORD_KEY', variable: 'CYPRESS_RECORD_KEY')]) {
                    sh '''
                        export CYPRESS_CACHE_FOLDER=/root/.cache/Cypress
                        npx cypress run --browser electron --record --key $CYPRESS_RECORD_KEY
                    '''
                }
            }
        }
    }
}
