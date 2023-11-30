"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRoutes = void 0;
const express_1 = require("express");
const searchController_1 = require("../controllers/searchController");
exports.searchRoutes = (0, express_1.Router)();
exports.searchRoutes.post("", searchController_1.search);
