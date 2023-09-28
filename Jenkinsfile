pipeline {
    agent any

    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/willian2as/teste-ebac-ui.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar testes e gerar relatório') {
            steps {
                bat 'npm run cy:report'
            }
        }
    }
}