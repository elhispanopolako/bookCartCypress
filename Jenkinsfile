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

    stage('Run Cypress Tests') {
      steps {
        bat 'npm run scripts'
      }
    }
    stage('Generate report'){
        steps{
          bat 'npm run posttest'
        }
    }
   }
    post {
         always{
            publishHTML (target : [allowMissing: false, alwaysLinkToLastBuild: true,keepAll: true,reportDir: 'mochawesome-report',reportFiles: 'mochawesome.html',reportName: 'My Reports',reportTitles: 'The Report'])
        }
      } 
}


