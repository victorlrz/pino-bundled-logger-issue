import {
  require_src
} from "./chunk-APC5XFFR.mjs";
import {
  __commonJS
} from "./chunk-QHOBBTS4.mjs";

// ../../node_modules/.pnpm/pino@8.16.1/node_modules/pino/lib/transport-stream.js
var require_transport_stream = __commonJS({
  "../../node_modules/.pnpm/pino@8.16.1/node_modules/pino/lib/transport-stream.js"(exports, module) {
    "use strict";
    var { realImport, realRequire } = require_src();
    module.exports = loadTransportStreamBuilder;
    async function loadTransportStreamBuilder(target) {
      let fn;
      try {
        const toLoad = "file://" + target;
        if (toLoad.endsWith(".ts") || toLoad.endsWith(".cts")) {
          if (process[Symbol.for("ts-node.register.instance")]) {
            realRequire("ts-node/register");
          } else if (process.env && process.env.TS_NODE_DEV) {
            realRequire("ts-node-dev");
          }
          fn = realRequire(decodeURIComponent(target));
        } else {
          fn = await realImport(toLoad);
        }
      } catch (error) {
        if (error.code === "ENOTDIR" || error.code === "ERR_MODULE_NOT_FOUND") {
          fn = realRequire(target);
        } else if (error.code === void 0) {
          fn = realRequire(decodeURIComponent(target));
        } else {
          throw error;
        }
      }
      if (typeof fn === "object")
        fn = fn.default;
      if (typeof fn === "object")
        fn = fn.default;
      if (typeof fn !== "function")
        throw Error("exported worker is not a function");
      return fn;
    }
  }
});

export {
  require_transport_stream
};
