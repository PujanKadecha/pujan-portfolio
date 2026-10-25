# Pujan Kadecha — Developer Portfolio

A personal developer portfolio showcasing my backend development skills, projects, internship experience, education, and contact information.

**Live Website:** [pujan-portfolio-ruby.vercel.app](https://pujan-portfolio-ruby.vercel.app)

## About

I'm a developer focused on **Node.js backend development**, REST APIs, database design, authentication, and building maintainable backend applications.

This portfolio highlights my technical skills and projects developed through practical learning and internship experience.

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Joi validation
- Helmet
- Express Rate Limit
- Resend for email notifications

### Deployment and Tools
- Git and GitHub
- Vercel — frontend deployment
- Render — backend deployment
- Neon — PostgreSQL database
- Docker

## Features

- Responsive portfolio website
- Dark-themed user interface
- About, skills, projects, experience, and education sections
- Project links to GitHub, live demos, and Docker Hub
- Contact form connected to the backend API
- Contact messages stored in PostgreSQL
- Email notifications through Resend
- API security using Helmet, CORS, request validation, and rate limiting
- Separate frontend and backend applications

## Project Structure

```text
pujan-portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── sections/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   └── package.json
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── validators/
│   │   ├── app.js
│   │   └── server.js
│   ├── prisma7.config.ts
│   ├── .env.example
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

Install the following before running the project locally:

- Node.js and npm
- PostgreSQL database or a Neon PostgreSQL database
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/PujanKadecha/pujan-portfolio.git
cd pujan-portfolio
```

### 2. Set Up the Frontend

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` directory:

```dotenv
VITE_API_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

`http://localhost:5173`

### 3. Set Up the Backend

Open a second terminal:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```dotenv
PORT=5000
CLIENT_URL=http://localhost:5173

DATABASE_URL="YOUR_POSTGRESQL_CONNECTION_STRING"
DATABASE_URL_UNPOOLED="YOUR_UNPOOLED_POSTGRESQL_CONNECTION_STRING"

RESEND_API_KEY="YOUR_RESEND_API_KEY"
CONTACT_RECEIVER="YOUR_EMAIL_ADDRESS"
RESEND_FROM_EMAIL="YOUR_VERIFIED_SENDER_EMAIL"
```

Replace the placeholder values with your own credentials. Use the appropriate database connection strings for your PostgreSQL provider. If your Prisma configuration requires `DATABASE_URL_UNPOOLED`, configure it as shown above.

**Important:** Never commit your actual `.env` files, database credentials, or email API keys to GitHub.

### 4. Generate Prisma Client

From the `backend` directory, run:

```bash
npx prisma generate
```

### 5. Apply Database Migrations

Make sure your database connection variables are configured, then run:

```bash
npx prisma migrate deploy
```

This applies the existing migrations to your database. For a fresh database, ensure the repository contains the required migration files.

### 6. Start the Backend

```bash
npm run dev
```

The backend will normally run at:

`http://localhost:5000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check API health |
| POST | `/api/contact` | Submit a contact message |

### Health Check

```http
GET /api/health
```

Example response:

```json
{
  "success": true,
  "message": "API is running"
}
```

### Contact Form

```http
POST /api/contact
Content-Type: application/json
```

Example request body:

```json
{
  "name": "Your Name",
  "email": "your-email@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I would like to discuss a project."
}
```

The contact endpoint validates submitted data and stores contact messages in PostgreSQL. Email notifications depend on the Resend configuration.

## Featured Projects

### 1. Collaborative Workspace Application

A collaborative application featuring workspace and document operations, database integration, and real-time functionality.

- **GitHub:** [WorkSpace](https://github.com/PujanKadecha/WorkSpace)
- **Live Demo:** [Open Application](https://workspace-six-brown-29.vercel.app)
- **Docker Hub — Frontend:** [collaborative-workspace-frontend](https://hub.docker.com/repository/docker/70madmax07/collaborative-workspace-frontend/general)
- **Docker Hub — Backend:** [collaborative-workspace-backend](https://hub.docker.com/repository/docker/70madmax07/collaborative-workspace-backend)

### 2. Secure Authentication and Authorization System

An authentication project focused on password hashing, token-based authentication, role-based access control, and modular backend architecture.

- **GitHub:** [SecureAuth](https://github.com/PujanKadecha/SecureAuth)
- **Live Demo:** [Open Application](https://secureauth-fullstack.vercel.app)
- **Docker Hub — Frontend:** [authapi-frontend](https://hub.docker.com/repository/docker/70madmax07/authapi-frontend)
- **Docker Hub — Backend:** [authapi-auth-service](https://hub.docker.com/repository/docker/70madmax07/authapi-auth-service/general)

### 3. E-Commerce Application

An e-commerce project with REST API operations, CRUD functionality, database models, request validation, and structured error handling.

- **GitHub:** [Ecommerce](https://github.com/PujanKadecha/Ecommerce)
- **Live Demo:** [Open Application](https://ecommerce-two-jet.vercel.app/)
- **Docker Hub — Frontend:** [ecommerce-frontend](https://hub.docker.com/repository/docker/70madmax07/ecommerce-frontend)
- **Docker Hub — Backend:** [ecommerce-api](https://hub.docker.com/repository/docker/70madmax07/ecommerce-api/general)

## Deployment

The portfolio uses separate deployment services for the frontend and backend.

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** Neon PostgreSQL
- **Email notifications:** Resend

For production, configure `VITE_API_URL` in Vercel to point to your deployed backend URL. Configure `CLIENT_URL` in Render to match the deployed frontend origin.

After changing frontend environment variables, rebuild and redeploy the frontend.

## Security Considerations

- Keep credentials in environment variables.
- Never commit `.env` files.
- Validate incoming contact form data.
- Configure CORS to allow only trusted frontend origins.
- Use rate limiting to reduce abusive API requests.
- Use HTTPS for production deployments.
- Keep dependencies updated.

## Author

**Pujan Kadecha**

- **GitHub:** [PujanKadecha](https://github.com/PujanKadecha)
- **LinkedIn:** [Pujan Kadecha](https://www.linkedin.com/in/pujan-kadecha-2aa214262)
- **Portfolio:** [Visit Website](https://pujan-portfolio-ruby.vercel.app)

---

If you find this portfolio useful, feel free to explore the repositories and projects linked above.
