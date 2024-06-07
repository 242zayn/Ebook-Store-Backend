import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.MONGO_CONNECTION_STRING,
  env: process.env.NODE_ENV,
  jwtsecret: process.env.JWT_SECRET,
  db_name:process.env.OPTION_DB,
};

export const config = Object.freeze(_config);
