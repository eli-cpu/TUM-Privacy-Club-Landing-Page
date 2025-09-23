import mongoose from "mongoose";

const connectMongoDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("[Mongo] MONGO_URI fehlt in .env");
    process.exit(1);
  }
  const sanitized = process.env.MONGO_URI.replace(/:[^@]+@/, ":***@");
  console.log("[Mongo] Verbinde zu:", sanitized);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 15000,
      retryWrites: true,
    });
    console.log(
      `[Mongo] Verbunden: ${conn.connection.host}/${conn.connection.name}`
    );
    return conn;
  } catch (error) {
    console.error(
      "[Mongo] Verbindungsfehler:",
      error.code,
      error.codeName,
      error.message
    );
    if (error.errorResponse)
      console.error("[Mongo] Details:", error.errorResponse);
    throw error;
  }
};

export default connectMongoDB;
