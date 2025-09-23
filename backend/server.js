import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./db/connectMongoDB.js";
import eventRoutes from "./routes/event.route.js";
import emailRoutes from "./routes/email.route.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.BACKEND_PORT || process.env.PORT || 4000;

// Pfade für statische Dateien (Frontend Build)
const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "../frontend/dist");

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || "*" }));
app.use(express.json({ limit: "100kb" }));

// Statische Auslieferung des Frontend-Builds
app.use(express.static(distPath));

// API Routes
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/events", eventRoutes); // GET
app.use("/api/email", emailRoutes); // POST

// API 404 nur für /api/... Pfade
app.use("/api", (_req, res) => res.status(404).json({ error: "Not Found" }));

// SPA Fallback für alle anderen Routen (Client-Side Routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

(async () => {
  try {
    await connectMongoDB();
    app.listen(PORT, () =>
      console.log(`Backend (Mongo + Static) läuft auf Port ${PORT}`)
    );
  } catch (e) {
    console.error("Startup failure:", e.message);
    process.exit(1);
  }
})();
