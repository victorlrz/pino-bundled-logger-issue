"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  createLogger: () => createLogger
});
module.exports = __toCommonJS(src_exports);

// src/base-logger.ts
var import_pino = __toESM(require("pino"));
var shouldPrettify = true;
var customLevels = {
  levels: {
    error: 50,
    warn: 40,
    info: 30,
    debug: 20
  }
};
var baseLogger = (0, import_pino.default)({
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createLogger
});
