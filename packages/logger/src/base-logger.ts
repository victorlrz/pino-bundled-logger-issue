import pino, { LevelWithSilent, Logger } from "pino";

const shouldPrettify = true;

const customLevels = {
  levels: {
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
  },
};

const baseLogger = pino({
  customLevels: customLevels.levels,
  level: "info",
  ...(shouldPrettify
    ? {
        transport: {
          target: "logger/dist/pino-pretty-transport.js",
          options: {
            translateTime: false,
            ignore: "service,env,source,time,request,response,id",
          },
        },
      }
    : undefined),
  base: {
    service: "portal",
  },
});

const setLevel =
  (logger: Logger) =>
  (level: LevelWithSilent): Logger => {
    logger.level = level;

    return logger;
  };

export const createLogger = {
  ...baseLogger,
  setLevel: setLevel(baseLogger),
};
