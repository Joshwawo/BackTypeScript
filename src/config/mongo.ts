import "dotenv/config";

import { connect } from "mongoose";

const NODE_ENV = process.env.NODE_ENV;

const dbConnect = async (): Promise<void> => {
  const DB_URI = <string>process.env.DB_URI;
  await connect(DB_URI);
};
