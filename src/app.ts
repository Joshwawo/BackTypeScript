import express from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(router);
db()
  .then(() => {
    console.log("Con exitosa ");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el http://localhost:${PORT}`);
});
