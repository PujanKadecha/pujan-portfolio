import app from "./app.js";
import "dotenv/config";
import { prisma } from "./config/prisma.js";

const PORT = process.env.PORT;

async function startServer() {
  try {
    await prisma.$connect();
    console.log("PostgreSQL Connected");
    app.listen(PORT, () => {
      console.log(`Server is Running on ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

startServer();

async function shutdown() {
  await prisma.$disconnect();
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
