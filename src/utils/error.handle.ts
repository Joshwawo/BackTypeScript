import { Response } from "express";
const handleHttp = (res: Response, error: string) => {
  res.status(500);
  res.send({ error: error });
};

export { handleHttp };
