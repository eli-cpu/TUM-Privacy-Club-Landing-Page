import Event from "../models/event.model.js";
import { events } from "../data/store.js";

export const getData = async (req, res) => {
  try {
    const now = new Date();
    const limit = Math.min(parseInt(req.query.limit) || 10, 100);
    const events = await Event.find({ date: { $gte: now } })
      .sort({ date: 1 })
      .limit(limit)
      .select("-__v");

    return res.status(200).json({
      count: events.length,
      events,
      generatedAt: now.toISOString(),
    });
  } catch (error) {
    console.log("Error in getData controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getEvent = async (_req, res) => {
  try {
    // Nächstes Event (Datum >= jetzt) oder, falls keins, letztes vorhandenes
    const now = new Date();
    let event = await Event.findOne({ date: { $gte: now } })
      .sort({ date: 1 })
      .lean();
    if (!event) {
      event = await Event.findOne().sort({ date: -1 }).lean();
    }
    if (!event) return res.status(200).json({ event: null });
    return res.status(200).json({
      event: {
        id: event._id,
        title: event.title,
        date: event.date.toISOString().split("T")[0],
        time: event.time,
        location: event.location,
        description: event.description,
      },
    });
  } catch (e) {
    console.error("[EventController] getEvent error", e.message);
    res.status(500).json({ error: "Interner Fehler" });
  }
};
