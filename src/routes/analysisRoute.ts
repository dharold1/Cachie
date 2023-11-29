import { Router } from "express";
import { analyse } from "../controllers/analysisController";

export const analysisRoutes = Router();

analysisRoutes.get("/analyse", analyse);
