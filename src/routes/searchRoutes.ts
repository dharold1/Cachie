import { Router } from "express";
import { search } from "../controllers/searchController";

export const searchRoutes = Router();

searchRoutes.post("", search);
