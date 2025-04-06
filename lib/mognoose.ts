import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  const MONGO_URL = process.env.MONGODB_URL
  console.log(MONGO_URL);
  

  if (!MONGO_URL) {
    return console.error("MONGO_URI is not defined");
  }

  if (isConnected) {
    return; 
  }

  try {
    const options: ConnectOptions = {
      dbName: "marafon",
      autoCreate: true,
    };

    await mongoose.connect(MONGO_URL, options);
    isConnected = true;
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};
