"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRoute = void 0;
const express_1 = require("express");
const searchController_1 = require("../controllers/searchController");
exports.searchRoute = (0, express_1.Router)();
exports.searchRoute.post("/search", searchController_1.search);
