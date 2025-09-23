import express from "express";
import { getEvent } from "../controllers/event.controller.js";
const router = express.Router();

router.get("/", getEvent);

export default router;
