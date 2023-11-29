import { Request, Response } from "express";
let arrayValue: number[] = [];

type WordType = string[];

export let words: WordType = [];

export const search = (req: Request, res: Response) => {
  const { search_query } = req.body;
  if (search_query === "") {
    return res.status(400).json({ error: "The search query cannot be empty." });
  }
  words.push(search_query.trim());
  console.log(words);
  res.status(200).json({ status: "ok" });
};
