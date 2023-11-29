import { Router } from "express";
import { search } from "../controllers/searchController";

export const searchRoute = Router();

searchRoute.post("/search", search);
