import Email from "../models/email.model.js";

export const saveEmail = async (req, res) => {
  try {
    const { email } = req.body || {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return res.status(400).json({ error: "Ungültige E-Mail" });
    }
    const normalized = email.trim().toLowerCase();
    const existing = await Email.findOne({ email: normalized }).lean();
    if (existing)
      return res
        .status(200)
        .json({ message: "Bereits vorhanden", email: normalized });
    await Email.create({ email: normalized });
    return res.status(201).json({ message: "Gespeichert", email: normalized });
  } catch (e) {
    if (e.code === 11000) {
      return res.status(200).json({
        message: "Bereits vorhanden",
        email: req.body.email?.toLowerCase(),
      });
    }
    console.error("[EmailController] saveEmail error", e.message);
    res.status(500).json({ error: "Interner Fehler" });
  }
};
