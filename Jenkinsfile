pipeline {
    agent { docker 'cypress/included:latest' }
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
