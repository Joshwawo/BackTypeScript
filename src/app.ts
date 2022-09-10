import express from "express";
import cors from "cors";
import "dotenv/config";
import fileupload from "express-fileupload";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3000;

export const JTW_SECRET = process.env.JTW_SECRET || "HOLAS";

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
app.use(router);
db()
  .then(() => {
    console.log("Conexion exitosa a la base de datos");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el http://localhost:${PORT}`);
});
