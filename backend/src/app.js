import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import contactRoutes from "./routes/contact.routes.js";
import {
  notFoundHandler,
  errorHandler,
} from "./middleware/error.middleware.js";

const app = express();

app.use(helmet());

const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. curl, Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS: origin '${origin}' not allowed`));
      }
    },
  }),
);

app.use(express.json({ limit: "10kb" }));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  }),
);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  });
});

app.use("/api/contact",contactRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
