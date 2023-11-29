"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analysisRoutes = void 0;
const express_1 = require("express");
const analysisController_1 = require("../controllers/analysisController");
exports.analysisRoutes = (0, express_1.Router)();
exports.analysisRoutes.get("/analyse", analysisController_1.analyse);
