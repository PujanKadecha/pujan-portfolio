const projects = [
  {
    id: 1,
    title: "Collaborative Workspace Application",
    description:
      "Developed backend functionality for workspace and document-related operations. Used PostgreSQL and Prisma ORM for relational database management, implemented real-time communication features, and organized backend components for maintainability.",
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
      "Developed backend authentication functionality using password hashing and token-based authentication. Implemented authorization mechanisms and role-based access control, organized backend functionality into modular components, and addressed API security requirements.",
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
      "Developed REST API functionality for e-commerce resources and CRUD operations. Implemented request validation and structured error handling, integrated database models with API endpoints, and organized application functionality into modular backend components.",
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
