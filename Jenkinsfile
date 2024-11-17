pipeline {
    agent { docker 'cypress/included:latest' }
    stages {
        stage('Install and run tests') {
            steps {
                sh 'npm install'
                sh 'npx cypress run --browser chrome --record --key $CYPRESS_RECORD_KEY'
            }
        }
    }
}