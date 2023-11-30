"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyse = void 0;
const searchController_1 = require("./searchController");
const start_time = new Date().getTime();
const analyse = (req, res) => {
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
        res.status(200).json({ results: wordOccurrences });
    }
    else {
        return res.status(400).send({ error: "Analysis token is required" });
    }
    // const end_time = new Date().getTime();
    // const duration = end_time - start_time;
    // console.log(duration, end_time, start_time);
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
