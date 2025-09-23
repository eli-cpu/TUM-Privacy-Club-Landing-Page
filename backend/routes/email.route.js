import express from "express";
import { saveEmail } from "../controllers/email.controller.js";

const router = express.Router();

// POST /api/email  -> speichert Dummy E-Mail.
router.post("/", saveEmail);

export default router;
