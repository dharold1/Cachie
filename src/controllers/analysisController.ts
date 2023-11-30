import { Request, Response } from "express";
import { words } from "./searchController";
import { performance } from "perf_hooks";

type WordObject = { [key: string]: number };
export const analyse = (req: Request, res: Response) => {
  const start = performance.now();
  const { analysis_token } = req.query;
  const wordOccurrences: WordObject = {};
  if (analysis_token) {
    const arrayOfWords = analysis_token
      .toString()
      .split(",")
      .map((word) => word.trim());

    arrayOfWords.forEach((word) => {
      wordOccurrences[word] = countWordOccurrences(word, words);
    });
    const end = performance.now();
    const duration = end - start;

    res
      .status(200)
      .json({ results: wordOccurrences, time: `${duration.toFixed(1)}ms` });
  } else {
    return res.status(400).send({ error: "Analysis token is required" });
  }
};

function countWordOccurrences(word: string, arrayOfStrings: string[]) {
  let count: number = 0;
  arrayOfStrings.filter((str) => {
    const countValue = str.toLowerCase().split(word.toLowerCase()).length - 1;
    count += countValue;
    return str.toLowerCase().split(" ").includes(word.toLowerCase());
  });

  return count;
}
