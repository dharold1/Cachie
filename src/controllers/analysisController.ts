import { Request, Response } from "express";
import { words } from "./searchController";
const start_time = new Date().getTime();

type WordObject = { [key: string]: number };
export const analyse = (req: Request, res: Response) => {
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
    res.status(200).json({ result: wordOccurrences });
  } else {
    return res.status(400).json({ error: "Analysis token is required" });
  }

  // const end_time = new Date().getTime();

  // const duration = end_time - start_time;

  // console.log(duration, end_time, start_time);
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
