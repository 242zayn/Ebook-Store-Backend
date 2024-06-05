import mongoose from "mongoose";

import { config } from "../config/config";
import { error } from "console";

const connectDb = async () => {
  try {
     mongoose.connection.on("connected", () => {
       console.log("Sucessfully conneted with database");
     });
     mongoose.connection.on("err", (error) => {
       console.log("Error with connection with database", error);
     });
    await mongoose.connect(config.databaseUrl as string);
  } catch (error) {
    console.log("Fail to connect with databasee" + error);
    process.exit(1)
  }
};

export default connectDb
