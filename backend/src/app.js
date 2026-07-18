import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import hpp from "hpp";

import env from "./config/env.js";

import requestLogger from "./shared/logger/requestLogger.js";

const app = express();

/* ==========================================
   Trust Proxy
========================================== */

app.set("trust proxy", 1);

/* ==========================================
   Security
========================================== */

app.use(helmet());

app.use(
    cors({
        origin: env.CLIENT_URL,
        credentials: true
    })
);

app.use(hpp());

/* ==========================================
   Performance
========================================== */

app.use(compression());

/* ==========================================
   Parsers
========================================== */

app.use(express.json({
    limit: "10mb"
}));

app.use(express.urlencoded({
    extended: true
}));

app.use(cookieParser(env.COOKIE.SECRET));

/* ==========================================
   Logger
========================================== */

app.use(requestLogger);

/* ==========================================
   Health Check
========================================== */

app.get("/health", (req, res) => {

    return res.status(200).json({

        success: true,

        message: "Server is running."

    });

});

/* ==========================================
   Routes
========================================== */

// هيتم إضافتهم بعد شوية
// app.use(env.API_PREFIX, routes);

/* ==========================================
   404
========================================== */

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;