"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = exports.words = void 0;
let arrayValue = [];
exports.words = [];
const search = (req, res) => {
    const { search_query } = req.body;
    if (search_query === "") {
        return res.status(400).send({ error: "The search query cannot be empty." });
    }
    exports.words.push(search_query.trim());
    res.status(201).json({ status: "ok" });
};
exports.search = search;
