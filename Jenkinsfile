pipeline {
     agent any
     
     environment {
        DOCKER_HUB_REPO = 'saikat816'
        FRONTEND_IMAGE = "${DOCKER_HUB_REPO}/news_website:frontend"
        BACKEND_IMAGE = "${DOCKER_HUB_REPO}/news_website:backend"
    }
    
    
    stages {
        stage('Clone from GitHub') {
            steps {
                echo 'Clone Repository'
                git url: 'https://github.com/saikat-bahadur/News-Website.git',branch:'main'
                 echo 'Clone Successfully'
            }
        }
        
        stage('Build Frontend Docker Image') {
            steps {
                script {
                    echo 'Building Frontend Docker Image'
                    dir('Frontend') {
                        sh "docker build -t ${FRONTEND_IMAGE} ."
                    }
                    echo 'Building FRONTEND SUCCESS'
                }
            }
        }
        
         stage('Build Backend Docker Image') {
            steps {
               script {
                    echo 'Building Backend Docker Image'
                    dir('Backend') {
                      sh "docker build -t ${BACKEND_IMAGE} ."
                    }
                    echo 'Building BACKEND SUCCESS'
                }
            }
        }
        
          stage('Push Docker Images to Docker Hub') {
             steps {
                withCredentials([usernamePassword(
                    credentialsId: 'DockerHubCred',
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD'
                )]) {
                    sh '''
                        echo "$PASSWORD" | docker login -u "$USERNAME" --password-stdin
                        docker push ${FRONTEND_IMAGE}
                        docker push ${BACKEND_IMAGE}
                    '''
                }
            }
        }
        
          stage('Run with Docker Compose') {
            steps {
             script {
                echo 'container created'
                    sh 'docker-compose up -d'
                 }
             }
         }
    
    }
    
    post {
        success {
            echo 'Images pushed successfully!'
        }
        failure {
            echo 'Build or push failed.'
        }
    }
    
}

