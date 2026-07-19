import pino from "pino";
import env from "../../config/env.js";
// import env from "@config/env.js";

const isDevelopment = env.NODE_ENV === "development";

const logger = pino({

    level: isDevelopment ? "debug" : "info",

    transport: isDevelopment
        ? {
              target: "pino-pretty",

              options: {

                  colorize: true,

                  translateTime: "HH:MM:ss",

                  ignore: "pid,hostname"

              }

          }
        : undefined,

    timestamp: pino.stdTimeFunctions.isoTime

});

export default logger;