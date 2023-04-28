import { RequestHandler } from "express";

export const test: RequestHandler = (req, res, next) => {
  res.send("Test");
};
