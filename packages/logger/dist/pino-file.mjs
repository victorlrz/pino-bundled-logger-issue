import {
  require_pino
} from "./chunk-H5ZKQ4QL.mjs";
import "./chunk-3A6QXNH5.mjs";
import "./chunk-LXUT2IC7.mjs";
import {
  __commonJS,
  __require
} from "./chunk-QHOBBTS4.mjs";

// ../../node_modules/.pnpm/pino@8.16.1/node_modules/pino/file.js
var require_file = __commonJS({
  "../../node_modules/.pnpm/pino@8.16.1/node_modules/pino/file.js"(exports, module) {
    var pino = require_pino();
    var { once } = __require("events");
    module.exports = async function(opts = {}) {
      const destOpts = Object.assign({}, opts, { dest: opts.destination || 1, sync: false });
      delete destOpts.destination;
      const destination = pino.destination(destOpts);
      await once(destination, "ready");
      return destination;
    };
  }
});
export default require_file();
