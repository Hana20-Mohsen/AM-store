import mongoose from "mongoose";
import env from "./env.js";
import logger from "../shared/logger/logger.js";

mongoose.set("strictQuery", true);

if (env.NODE_ENV === "development") {
  mongoose.set("autoIndex", true);
} else {
  mongoose.set("autoIndex", false);
}

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(env.DB.URI, {
      maxPoolSize: 20,
      minPoolSize: 5,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4,
    });

    logger.info(
      ` MongoDB Connected Successfully: ${connection.connection.host}`
    );
  } catch (error) {
    logger.fatal({
      message: error.message,
      stack: error.stack,
    });

    process.exit(1);
  }
};

/* ===========================
   Mongo Events
=========================== */

mongoose.connection.on("connected", () => {
  logger.info("MongoDB connection established.");
});

mongoose.connection.on("disconnected", () => {
  logger.warn("MongoDB disconnected.");
});

mongoose.connection.on("reconnected", () => {
  logger.info("MongoDB reconnected.");
});

mongoose.connection.on("error", (error) => {
  logger.error({
    message: error.message,
    stack: error.stack,
  });
});

/* ===========================
   Graceful Shutdown
=========================== */

process.on("SIGINT", async () => {
  await mongoose.connection.close();

  logger.info("MongoDB Connection Closed.");

  process.exit(0);
});

/* ===========================
   Health Check
=========================== */

export const isDatabaseConnected = () => {
  return mongoose.connection.readyState === 1;
};

export default connectDatabase;