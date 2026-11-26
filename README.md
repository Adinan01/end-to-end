# End-to-End DevOps & Cloud Project

A complete DevOps workflow: a containerised Node.js web app, built and deployed with a Jenkins CI/CD pipeline, orchestrated on Kubernetes with Helm, and monitored with Prometheus and Grafana. Hosted on AWS EC2.

## Tech Stack
- Cloud: AWS EC2 (Ubuntu)
- Version Control: Git, GitHub
- Containerisation: Docker, Docker Hub (adinan01/devops-app)
- CI/CD: Jenkins (Jenkinsfile)
- Orchestration: Kubernetes, Helm
- Monitoring: Prometheus, Grafana
- Planned: Terraform, Ansible (infra folder)

## Project Structure
- app/ : Node.js sample web application
- docker/ : Dockerfile and container setup
- Jenkinsfile : CI/CD pipeline definition
- ci/ : CI related files
- k8s/ : Kubernetes manifests
- devops-chart/ : Helm chart for the application
- infra/ : Infrastructure as Code (in progress)

## How It Works
1. Code is pushed to GitHub.
2. Jenkins builds the Docker image and pushes it to Docker Hub.
3. The app is deployed to Kubernetes using manifests / the Helm chart.
4. Prometheus collects metrics and Grafana shows dashboards.

## Author
Muhammad Adhinan - Aspiring DevOps Engineer
GitHub: https://github.com/Adinan01
LinkedIn: https://www.linkedin.com/in/muhammad-adhinan-5107283aa/
