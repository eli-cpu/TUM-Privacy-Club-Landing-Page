import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./db/connectMongoDB.js";
import eventRoutes from "./routes/event.route.js";
import emailRoutes from "./routes/email.route.js";

dotenv.config();

const app = express();
const PORT = process.env.BACKEND_PORT || process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || "*" }));
app.use(express.json({ limit: "100kb" }));

// Routes
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/events", eventRoutes); // GET
app.use("/api/email", emailRoutes); // POST

// 404
app.use((req, res) => res.status(404).json({ error: "Not Found" }));

// Entferne Seeding: keine Dummy-Daten mehr
(async () => {
  try {
    await connectMongoDB();
    app.listen(PORT, () =>
      console.log(`Backend (Mongo) läuft auf Port ${PORT}`)
    );
  } catch (e) {
    console.error("Startup failure:", e.message);
    process.exit(1);
  }
})();
