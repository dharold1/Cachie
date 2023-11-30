"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyse = void 0;
const searchController_1 = require("./searchController");
const perf_hooks_1 = require("perf_hooks");
const analyse = (req, res) => {
    const start = perf_hooks_1.performance.now();
    const { analysis_token } = req.query;
    const wordOccurrences = {};
    if (analysis_token) {
        const arrayOfWords = analysis_token
            .toString()
            .split(",")
            .map((word) => word.trim());
        arrayOfWords.forEach((word) => {
            wordOccurrences[word] = countWordOccurrences(word, searchController_1.words);
        });
        const end = perf_hooks_1.performance.now();
        const duration = end - start;
        res
            .status(200)
            .json({ results: wordOccurrences, time: `${duration.toFixed(1)}ms` });
    }
    else {
        return res.status(400).send({ error: "Analysis token is required" });
    }
};
exports.analyse = analyse;
function countWordOccurrences(word, arrayOfStrings) {
    let count = 0;
    arrayOfStrings.filter((str) => {
        const countValue = str.toLowerCase().split(word.toLowerCase()).length - 1;
        count += countValue;
        return str.toLowerCase().split(" ").includes(word.toLowerCase());
    });
    return count;
}
