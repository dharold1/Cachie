"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const searchRoutes_1 = require("./routes/searchRoutes");
const helmet_1 = __importDefault(require("helmet"));
const analysisRoute_1 = require("./routes/analysisRoute");
const app = (0, express_1.default)();
// const morgan =Morgan()
(0, dotenv_1.config)();
const allowedOrigins = ["*"];
const options = {
    origin: allowedOrigins,
};
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("tiny"));
app.use((0, cors_1.default)(options));
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use("/", searchRoutes_1.searchRoute);
app.use("/", analysisRoute_1.analysisRoutes);
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
});
