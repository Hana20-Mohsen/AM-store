import dotenv from "dotenv";

dotenv.config();

const requiredEnv = [
  "NODE_ENV",
  "PORT",
  "API_PREFIX",

  "MONGO_URI",

  "JWT_ACCESS_SECRET",
  "JWT_REFRESH_SECRET",

  "ACCESS_TOKEN_EXPIRES",
  "REFRESH_TOKEN_EXPIRES",

  "COOKIE_SECRET",

  "CLIENT_URL"
];

const missingEnv = requiredEnv.filter(
  (key) => !process.env[key]
);

if (missingEnv.length > 0) {
  throw new Error(
    `Missing environment variables:\n${missingEnv.join("\n")}`
  );
}

export const env = {

  NODE_ENV: process.env.NODE_ENV,

  PORT: Number(process.env.PORT),

  API_PREFIX: process.env.API_PREFIX,

  CLIENT_URL: process.env.CLIENT_URL,

  DB: {

    URI: process.env.MONGO_URI

  },

  JWT: {

    ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,

    REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,

    ACCESS_EXPIRES: process.env.ACCESS_TOKEN_EXPIRES,

    REFRESH_EXPIRES: process.env.REFRESH_TOKEN_EXPIRES

  },

  COOKIE: {

    SECRET: process.env.COOKIE_SECRET

  },

  EMAIL: {

    HOST: process.env.MAIL_HOST,

    PORT: process.env.MAIL_PORT,

    USER: process.env.MAIL_USER,

    PASSWORD: process.env.MAIL_PASSWORD,

    FROM: process.env.MAIL_FROM

  },

  CLOUDINARY: {

    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,

    API_KEY: process.env.CLOUDINARY_API_KEY,

    API_SECRET: process.env.CLOUDINARY_API_SECRET

  },

  STRIPE: {

    SECRET_KEY: process.env.STRIPE_SECRET_KEY,

    WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET

  },

  PAYMOB: {

    API_KEY: process.env.PAYMOB_API_KEY,

    INTEGRATION_ID: process.env.PAYMOB_INTEGRATION_ID

  },

  SOCKET: {

    ORIGIN: process.env.SOCKET_CORS_ORIGIN

  }

};

export default env;