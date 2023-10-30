import "./chunk-QHOBBTS4.mjs";

// src/base-logger.ts
import pino from "pino";
var shouldPrettify = true;
var customLevels = {
  levels: {
    error: 50,
    warn: 40,
    info: 30,
    debug: 20
  }
};
var baseLogger = pino({
  customLevels: customLevels.levels,
  level: "info",
  ...shouldPrettify ? {
    transport: {
      target: "logger/dist/pino-pretty-transport.js",
      options: {
        translateTime: false,
        ignore: "service,env,source,time,request,response,id"
      }
    }
  } : void 0,
  base: {
    service: "portal"
  }
});
var setLevel = (logger) => (level) => {
  logger.level = level;
  return logger;
};
var createLogger = {
  ...baseLogger,
  setLevel: setLevel(baseLogger)
};
export {
  createLogger
};
