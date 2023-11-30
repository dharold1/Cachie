import express, { Application } from "express";
import morgan from "morgan";
import { searchRoutes } from "./routes/searchRoutes";
import helmet from "helmet";
import cors from "cors";
import { analysisRoutes } from "./routes/analysisRoute";

const app: Application = express();
const allowedOrigins = ["*"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors(options));
app.use(express.urlencoded({extended: false }));
app.use(express.json());
app.use("/search", searchRoutes);
app.use("/analyse", analysisRoutes);
export default app;
