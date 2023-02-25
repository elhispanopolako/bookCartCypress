pipeline {
  agent any
  options{
        ansiColor('xterm')
    }
  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm run clean:reportsWindows'
        bat 'npm install'
      }
    }

    stage('Run Cypress Tests and generate report') {
      steps {
        bat 'npm run test'
      }
    }
   }
    post {
         always{
            publishHTML (target : [allowMissing: false, alwaysLinkToLastBuild: true,keepAll: true,reportDir: 'mochawesome-report',reportFiles: 'mochawesome.html',reportName: 'My Reports',reportTitles: 'The Report'])
        }
      } 
}


