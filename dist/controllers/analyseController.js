"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyse = void 0;
const analyse = (req, res) => {
    const { analysis_token } = req.query;
    res.status(200).json({ result: analysis_token });
};
exports.analyse = analyse;
