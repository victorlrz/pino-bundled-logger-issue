import {
  require_transport_stream
} from "./chunk-TOVREDZP.mjs";
import "./chunk-APC5XFFR.mjs";
import {
  require_pino
} from "./chunk-H5ZKQ4QL.mjs";
import "./chunk-3A6QXNH5.mjs";
import {
  require_pino_abstract_transport
} from "./chunk-V6KXX57G.mjs";
import "./chunk-LXUT2IC7.mjs";
import {
  __commonJS
} from "./chunk-QHOBBTS4.mjs";

// ../../node_modules/.pnpm/pino@8.16.1/node_modules/pino/lib/worker.js
var require_worker = __commonJS({
  "../../node_modules/.pnpm/pino@8.16.1/node_modules/pino/lib/worker.js"(exports, module) {
    var pino = require_pino();
    var build = require_pino_abstract_transport();
    var loadTransportStreamBuilder = require_transport_stream();
    module.exports = async function({ targets, levels, dedupe }) {
      targets = await Promise.all(targets.map(async (t) => {
        const fn = await loadTransportStreamBuilder(t.target);
        const stream = await fn(t.options);
        return {
          level: t.level,
          stream
        };
      }));
      return build(process, {
        parse: "lines",
        metadata: true,
        close(err, cb) {
          let expected = 0;
          for (const transport of targets) {
            expected++;
            transport.stream.on("close", closeCb);
            transport.stream.end();
          }
          function closeCb() {
            if (--expected === 0) {
              cb(err);
            }
          }
        }
      });
      function process(stream) {
        const multi = pino.multistream(targets, { levels, dedupe });
        stream.on("data", function(chunk) {
          const { lastTime, lastMsg, lastObj, lastLevel } = this;
          multi.lastLevel = lastLevel;
          multi.lastTime = lastTime;
          multi.lastMsg = lastMsg;
          multi.lastObj = lastObj;
          multi.write(chunk + "\n");
        });
      }
    };
  }
});
export default require_worker();
