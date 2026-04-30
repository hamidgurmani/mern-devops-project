# MERN DevOps Project Progress

## What is built so far
- Jenkins running on WSL2 port 8080
- SonarQube running on Docker port 9000
- kind cluster named: devops-project
- DockerHub account: hamid009
- DockerHub repos: hamid009/mern-frontend, hamid009/mern-backend
- ArgoCD NOT YET installed on devops-project cluster

## Folder structure created
~/mern-devops-project/
- application/frontend/ (React app complete)
- application/backend/ (Node.js app complete)
- kubernetes/ (empty - next step)
- jenkins/ (empty - next step)

## Next Step
Create Kubernetes manifest files in kubernetes/ folder
Order: namespace -> database -> backend -> frontend -> ingress

## Jenkins credentials already configured
- sonar-token
- ACCOUNT_ID (not needed now, can delete)
- ECR_REPO1 (not needed now, can delete)
- ECR_REPO2 (not needed now, can delete)
- GITHUB
- github
- aws-credentials (not needed now)

## New credentials needed in Jenkins
- dockerhub-credentials (username: hamid009, password: dockerhub token)

## SonarQube
- URL: http://localhost:9000
- Projects created: three-tier-frontend, three-tier-backend
- Webhook configured

## kind cluster context
kubectl config use-context kind-devops-project
