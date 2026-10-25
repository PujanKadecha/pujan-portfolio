const projects = [
  {
    id: 1,
    title: "Collaborative Workspace Application",
    description:
      "Real-time collaborative workspace where multiple users can work on documents together. I handled the whole backend — data modelling with Prisma, live sync with Socket.IO, and keeping the codebase easy to extend.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Socket.IO",
    ],
    github: "https://github.com/PujanKadecha/WorkSpace",
    liveDemo: "https://workspace-six-brown-29.vercel.app",
    frontendDocker:
      "https://hub.docker.com/repository/docker/70madmax07/collaborative-workspace-frontend/general",
    backendDocker:
      "https://hub.docker.com/repository/docker/70madmax07/collaborative-workspace-backend",
  },
  {
    id: 2,
    title: "Secure Authentication & Authorization System",
    description:
      "Full auth system from scratch — bcrypt hashing, JWT access/refresh tokens, role-based access control. I wanted to understand how security actually works under the hood, so I built it myself instead of reaching for a library.",
    technologies: ["Node.js", "Express.js", "JWT", "Password Hashing", "RBAC"],
    github: "https://github.com/PujanKadecha/SecureAuth",
    liveDemo: "https://secureauth-fullstack.vercel.app",
    frontendDocker:
      "https://hub.docker.com/repository/docker/70madmax07/authapi-frontend",
    backendDocker:
      "https://hub.docker.com/repository/docker/70madmax07/authapi-auth-service/general",
  },
  {
    id: 3,
    title: "E-Commerce Backend API",
    description:
      "REST API for a basic e-commerce setup — products, orders, carts. I focused on clean route structure, solid input validation, and making sure errors are handled in a way that doesn't leave the client guessing.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "CRUD Operations",
      "Request Validation",
    ],
    github: "https://github.com/PujanKadecha/Ecommerce",
    liveDemo: "https://ecommerce-two-jet.vercel.app/",
    frontendDocker:
      "https://hub.docker.com/repository/docker/70madmax07/ecommerce-frontend",
    backendDocker:
      "https://hub.docker.com/repository/docker/70madmax07/ecommerce-api/general",
  },
];

export default projects;
