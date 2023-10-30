import {
  require_transport_stream
} from "./chunk-TOVREDZP.mjs";
import "./chunk-APC5XFFR.mjs";
import {
  __commonJS,
  __require
} from "./chunk-QHOBBTS4.mjs";

// ../../node_modules/.pnpm/pino@8.16.1/node_modules/pino/lib/worker-pipeline.js
var require_worker_pipeline = __commonJS({
  "../../node_modules/.pnpm/pino@8.16.1/node_modules/pino/lib/worker-pipeline.js"(exports, module) {
    var EE = __require("events");
    var loadTransportStreamBuilder = require_transport_stream();
    var { pipeline, PassThrough } = __require("stream");
    module.exports = async function({ targets }) {
      const streams = await Promise.all(targets.map(async (t) => {
        const fn = await loadTransportStreamBuilder(t.target);
        const stream2 = await fn(t.options);
        return stream2;
      }));
      const ee = new EE();
      const stream = new PassThrough({
        autoDestroy: true,
        destroy(_, cb) {
          ee.on("error", cb);
          ee.on("closed", cb);
        }
      });
      pipeline(stream, ...streams, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          ee.emit("error", err);
          return;
        }
        ee.emit("closed");
      });
      return stream;
    };
  }
});
export default require_worker_pipeline();
