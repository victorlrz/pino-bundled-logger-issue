import {
  require_pino_pretty
} from "./chunk-EY6AQTLZ.mjs";
import "./chunk-V6KXX57G.mjs";
import "./chunk-LXUT2IC7.mjs";
import {
  __toESM
} from "./chunk-QHOBBTS4.mjs";

// src/pino-pretty-transport.ts
var import_pino_pretty = __toESM(require_pino_pretty());
import pino from "pino";
var levelColorize = (0, import_pino_pretty.colorizerFactory)(true);
var NEXT_PAD = 7;
var SEPARATOR = "-";
var pinoPrettyTransport = (opts) => (0, import_pino_pretty.default)({
  ...opts,
  messageFormat: (log, messageKey) => {
    const message = log[messageKey];
    if (log.level === void 0) {
      return message;
    }
    const level = pino.levels.labels[parseInt(log.level, 0)] ?? "unknown";
    const paddedLevelLength = level.length;
    const separator = SEPARATOR.padStart(NEXT_PAD - paddedLevelLength, " ");
    return `${separator} ${message}`;
  },
  customPrettifiers: {
    level: (level) => levelColorize(level).toLowerCase().slice(0, -1)
  }
});
var pino_pretty_transport_default = pinoPrettyTransport;
export {
  pino_pretty_transport_default as default
};
