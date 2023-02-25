pipeline {
  agent any
  options{
        ansiColor('xterm')
    }
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npm run scripts'
      }
    }
    stage('Generate report'){
        steps{
          sh 'npm run posttest'
          sh 'npm run clean:reports'
        }
    }
   }
    post {
         always{
            publishHTML (target : [allowMissing: false, alwaysLinkToLastBuild: true,keepAll: true,reportDir: 'mochawesome-report',reportFiles: 'mochawesome.html',reportName: 'My Reports',reportTitles: 'The Report'])
        }
      } 
}


