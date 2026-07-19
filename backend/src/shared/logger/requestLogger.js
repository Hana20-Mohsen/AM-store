import pinoHttp from "pino-http";
import logger from "./logger.js";

const requestLogger = pinoHttp({

    logger,

    autoLogging: true,

    customSuccessMessage(req) {

        return `${req.method} ${req.url}`;

    },

    customErrorMessage(req) {

        return `${req.method} ${req.url}`;

    }

});

export default requestLogger;