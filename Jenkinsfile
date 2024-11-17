pipeline {
    agent { docker 'cypress/browsers:node-22.11.0-chrome-130.0.6723.116-1-ff-132.0.1-edge-130.0.2849.68-1' }
    stages {
        stage('Install and run tests') {
            steps {
                withCredentials([string(credentialsId: 'CYPRESS_RECORD_KEY', variable: 'CYPRESS_RECORD_KEY')]) {
                    sh 'npm install'
                    sh 'npx cypress run --browser chrome --record --key $CYPRESS_RECORD_KEY'
                }
            }
        }
    }
}
