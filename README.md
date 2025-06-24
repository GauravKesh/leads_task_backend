# 🧪 Lead Management Backend

A simple Express.js + MongoDB backend for managing leads. Built as part of a Backedn Developer evaluation task.

## 🚀 Features

- Add new leads (name, email, phone)
- Retrieve list of leads (latest first)
- Update a lead
- Delete a lead
- Basic validation with Mongoose
- Environment config with `dotenv-flow`
- CORS and JSON middleware

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv-flow
- Nodemon (dev)

## Hosting
This project is hosted on [Render](https://render.com/). You can find the live version [here](https://leads-backend-9ria.onrender.com)

## 📁 Folder Structure
```
server/
├── models/
│ └── lead.model.js
├── controllers/
│ └── lead.controller.js
├── routes/
│ └── lead.route.js
├── app.js
├── server.js
└── package.json
```

## 🛠 API Endpoints

| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| GET    | `/api/health`  | [Health check](https://leads-backend-9ria.onrender.com/api/health)        |
| POST   | `/api/leads`   | Add new lead        |
| GET    | `/api/leads`   | [Get all leads ](https://leads-backend-9ria.onrender.com/api/v1/leads)      |
| PUT    | `/api/leads/:id` | Update a lead     |
| DELETE | `/api/leads/:id` | Delete a lead     |

### 🔧 Sample POST Body
```json
{
    "name": "Rahul Kumar",
    "email": "rahul.kumar@gmail.com",
    "phone": "9876543210",
    "address": "123 Residency Road, Bengaluru",
    "source": "Google Ads",
    "qualification": "MBA",
    "linkedin": "https://linkedin.com/in/rahulkumar",
    "interest": "Marketing"
  }
```
# 🧪 Running Locally
### 1. Clone the Repo
```bash
git clone https://github.com/GauravKesh/leads_task_backend
cd leads_task_backend
```
### 2. Setup Environment
Create a .env file:
```bash
touch .env
```
#### Add you sensitive data
``` text
PORT=9090
MONGODB_URI=mongodb+srv://<db_username>:<db_password>@<project-name>.mbk8a.mongodb.net/<db-name>?retryWrites=true&w=majority&appName=<app-name-you-created>

```
### 3. Install & Run
```bash
npm install
npm run dev
```
```The server should run at: http://localhost:9090```

✅ Health Check
Visit http://localhost:9090/api/health

```# leads_task_backend
