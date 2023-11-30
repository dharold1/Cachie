import { Request, Response } from "express";
let arrayValue: number[] = [];

type WordType = string[];

export let words: WordType = [];

export const search = (req: Request, res: Response) => {
  const { search_query } = req.body;
  if (search_query === "") {
    return res.status(400).send({ error: "The search query cannot be empty." });
  }
  words.push(search_query.trim());
  res.status(201).json({ status: "ok" });
};
