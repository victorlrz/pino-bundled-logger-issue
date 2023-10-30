import {
  __commonJS,
  __require
} from "./chunk-QHOBBTS4.mjs";

// ../../node_modules/.pnpm/real-require@0.2.0/node_modules/real-require/src/index.js
var require_src = __commonJS({
  "../../node_modules/.pnpm/real-require@0.2.0/node_modules/real-require/src/index.js"(exports, module) {
    "use strict";
    var realImport = new Function("modulePath", "return import(modulePath)");
    function realRequire(modulePath) {
      if (typeof __non_webpack__require__ === "function") {
        return __non_webpack__require__(modulePath);
      }
      return __require(modulePath);
    }
    module.exports = { realImport, realRequire };
  }
});

export {
  require_src
};
