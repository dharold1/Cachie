import express, { Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { searchRoute } from "./routes/searchRoutes";
import helmet from "helmet";
import { analysisRoutes } from "./routes/analysisRoute";
const app = express();
// const morgan =Morgan()
config();

const allowedOrigins = ["*"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors(options));
app.use(express.urlencoded());
app.use(express.json());
app.use("/", searchRoute);
app.use("/", analysisRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
