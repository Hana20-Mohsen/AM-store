import http from "http";

import app from "./app.js";

import env from "./config/env.js";
import connectDatabase from "./config/database.js";
import logger from "./shared/logger/logger.js";

import initializeSocket from "./sockets/index.js";

const startServer = async () => {
  try {
    // Connect MongoDB
    await connectDatabase();

    // Create HTTP Server
    const server = http.createServer(app);

    // Initialize Socket.io
    initializeSocket(server);

    // Start Server
    server.listen(env.PORT, () => {
      logger.info(
        ` Server running on http://localhost:${env.PORT}`
      );
    });

    // Handle Server Errors
    server.on("error", (error) => {
      logger.fatal(error);
    });

  } catch (error) {

    logger.fatal({
      message: error.message,
      stack: error.stack
    });

    process.exit(1);

  }
};

startServer();