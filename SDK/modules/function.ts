import { RequestHandler } from "express";

export const helloWorld: RequestHandler = (req, res, next) => {
  res.send("Hello World");
};
