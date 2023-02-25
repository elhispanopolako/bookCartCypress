pipeline {
  agent any
  options{
        ansiColor('xterm')
    }
  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        bat 'npm scripts'
      }
    }
    stage('Generate report'){
        steps{
          bat 'npm posttest'
        }
    }
   }
    post {
         always{
            publishHTML (target : [allowMissing: false, alwaysLinkToLastBuild: true,keepAll: true,reportDir: 'cypress/mochawesome-report/',reportFiles: 'mochawesome.html',reportName: 'My Reports',reportTitles: 'The Report'])
        }
      } 
}


