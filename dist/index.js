"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const app_1 = __importDefault(require("./app"));
// const morgan =Morgan()
(0, dotenv_1.config)();
app_1.default.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
});
