import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import routes from "./routes/routes";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/home", () => console.log("hello"));
app.use("/", routes);

app.listen(`${process.env.PORT}`, () =>
  console.log(`Server running on PORT ${process.env.PORT}`)
);
