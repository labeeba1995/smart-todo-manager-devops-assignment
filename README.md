# Smart Todo Manager

A collaborative DevOps-based Todo Management application developed as part of the **Advanced Git & DevOps Team Collaboration Assignment**.

The project demonstrates professional software development practices including Git branching strategies, pull requests, GitHub Actions CI/CD pipelines, and cloud deployment.

---

# Group Information

## Team Members

| Name         | Student ID      | Role                     |
| ------------ | --------------- | ------------------------ |
| S.M. Sukri   | ITBIN-2211-0297 | Frontend Developer       |
| Y. Shobin    | ITBIN-2211-0292 | Backend Developer        |
| MSF. Labeeba | ITBIN-2211-0215 | DevOps & Release Manager |

---

# Project Description

Smart Todo Manager is a responsive task management web application that helps users efficiently create, organize, track, and manage their daily tasks.

The application provides essential productivity features including task creation, task completion tracking, task deletion, and filtering tasks based on their current status.

The project was developed using a collaborative Git workflow where each team member worked on separate feature branches and integrated their work through Pull Requests.

---

# Live Deployment

🔗 **Live URL:**
(https://github.com/labeeba1995/smart-todo-manager-devops-assignment)

---

# Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript

## Development Tools

* Visual Studio Code
* Git
* GitHub

## DevOps & CI/CD

* GitHub Actions
* GitHub Pages Deployment

## Version Control Workflow

* Git Flow Branching Strategy
* Feature Branch Development
* Pull Requests
* Code Reviews
* Merge Management

---

# Features

## Task Management

* Create new tasks
* Mark tasks as completed
* Delete unwanted tasks
* Dynamically update task lists

## Task Filtering

* View all tasks
* View active tasks
* View completed tasks

## User Interface

* Responsive design
* Clean and modern layout
* User-friendly task management experience

## DevOps Features

* Automated CI workflow
* Automated deployment workflow
* Branch-based development process

---

# Branch Strategy

The project follows a standard Git Flow branching model.

```
main
 |
 |-- Production-ready branch
 |
develop
 |
 |-- Integration branch
 |
 |-- feature/frontend-ui
 |
 |-- feature/task-logic
```

## Branch Details

### main

* Production branch
* Contains stable and tested releases

### develop

* Integration branch
* Used for combining and testing completed features

### feature/frontend-ui

* Created for frontend user interface development

### feature/task-logic

* Created for task management functionality development

---

# Individual Contributions

## S.M. Sukri

**Role:** Frontend Developer
**Student ID:** ITBIN-2211-0297

### Contributions:

* Developed responsive frontend user interface
* Created the Todo application layout and structure
* Implemented task management interface components
* Developed task interaction functionality
* Created and managed feature branch:

```
feature/task-logic
```

### Main Commit:

```
3de2289 - feat: implement task management logic
```

---

## Y. Shobin

**Role:** Backend Developer
**Student ID:** ITBIN-2211-0292

### Contributions:

* Developed backend-related project components
* Assisted with application functionality integration
* Managed backend development tasks
* Contributed code through Git workflow

---

## MSF. Labeeba

**Role:** DevOps & Release Manager
**Student ID:** ITBIN-2211-0215

### Contributions:

* Managed repository configuration
* Configured GitHub Actions workflows
* Managed CI/CD pipeline setup
* Handled deployment configuration
* Coordinated release process
* Managed branch integration and project delivery

---

# Pull Requests & Code Review

The team followed a Pull Request based development workflow.

Completed Pull Requests:

* Feature frontend implementation → develop
* Task management implementation → develop

Each feature was reviewed before merging into the integration branch.

---

# Repository Structure

```
smart-todo-manager-devops-assignment/

│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── src/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .gitignore
│
├── README.md
│
└── package.json
```

---

# Setup & Installation Instructions

## Prerequisites

Install:

* Node.js
* Git
* Visual Studio Code

## Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/smart-todo-manager-devops-assignment.git
```

## Navigate to Project

```bash
cd smart-todo-manager-devops-assignment
```

## Install Dependencies

```bash
npm install
```

## Run Application

```bash
npm run dev
```

---

# CI/CD Pipeline

The project uses GitHub Actions to automate software delivery.

## Continuous Integration (CI)

Workflow file:

```
.github/workflows/ci.yml
```

The CI pipeline:

* Checks out source code
* Installs dependencies
* Runs validation checks
* Builds the application
* Executes tests

Triggered on:

* Push events
* Pull Requests
* Feature branch updates

## Continuous Deployment (CD)

Workflow file:

```
.github/workflows/deploy.yml
```

The deployment workflow:

* Automatically deploys the application
* Runs after changes are merged into the production branch
* Publishes the latest stable version

---

# Build Status

![CI Pipeline](https://github.com/YOUR_GITHUB_USERNAME/smart-todo-manager-devops-assignment/actions/workflows/ci.yml/badge.svg)

![Deployment](https://github.com/YOUR_GITHUB_USERNAME/smart-todo-manager-devops-assignment/actions/workflows/deploy.yml/badge.svg)

---

# Challenges & Resolutions

## Challenge 1: Team Collaboration

Different team members worked on separate features simultaneously.

### Solution:

Implemented feature branches and Pull Requests to safely integrate changes.

---

## Challenge 2: Code Integration

Combining multiple feature branches required proper merge management.

### Solution:

Used Git merge workflows and Pull Request reviews before integrating changes.

---

## Challenge 3: CI/CD Configuration

Setting up automated workflows required correct GitHub Actions configuration.

### Solution:

Created workflow YAML files and tested automated builds and deployments.

---

# Testing

The application was tested for:

* Task creation functionality
* Task completion updates
* Task deletion
* Task filtering
* Responsive UI behaviour
* Deployment accessibility

---

# Git Workflow Followed

The team followed these practices:

✅ Feature branch development
✅ Meaningful commit messages
✅ Pull Requests before merging
✅ Code review process
✅ GitHub Actions automation
✅ Continuous deployment workflow

---

# Conclusion

Smart Todo Manager demonstrates a complete DevOps collaboration workflow by combining application development with professional version control practices.

The project successfully implements team-based development, automated CI/CD pipelines, branch management, and cloud deployment following industry standards.
