import type { NextApiRequest, NextApiResponse } from "next";
import { createLogger } from "logger";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const logger = createLogger
  .setLevel("info")

  logger.info("Hello World");
  
  res.status(200).json({ text: "Hello World" });
};

export default handler;
