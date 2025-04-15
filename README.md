# Checklist App

This project contains a **backend service** and a **frontend UI** for a checklist application, managed via Docker Compose.

## 🐳 Getting Started with Docker

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

> Note: Use `docker compose` (with a space) if you're on Docker Compose V2.

### 🚀 Running the App

```bash
docker compose -f docker-compose.yml up --build

Project Structure
.
├── checklist
│   ├── backend        # Backend service (port 5000)
│   └── ui             # Frontend UI (served via Nginx on port 8080)
└── docker-compose.yml

Backend: Accessible at http://localhost:5000

Frontend: Accessible at http://localhost:8080
