pipeline {
	agent any
	stages {
		stage('Install chrome') {
			steps {
				sh 'sh ./bin/install-latest-chrome.sh'
	 		}
		}
        stage('Run Tests') {
            steps {
				nodejs(nodeJSInstallationName: 'node10.1.0') {
					sh '''#!/bin/bash
						npm install
						npm run e2e
					'''
				}
            }
        }
    }
}
