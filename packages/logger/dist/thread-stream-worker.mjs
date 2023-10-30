import {
  require_src
} from "./chunk-APC5XFFR.mjs";
import {
  require_indexes,
  require_wait
} from "./chunk-3A6QXNH5.mjs";
import {
  __require
} from "./chunk-QHOBBTS4.mjs";

// ../../node_modules/.pnpm/thread-stream@2.4.1/node_modules/thread-stream/lib/worker.js
var { realImport, realRequire } = require_src();
var { workerData, parentPort } = __require("worker_threads");
var { WRITE_INDEX, READ_INDEX } = require_indexes();
var { waitDiff } = require_wait();
var {
  dataBuf,
  filename,
  stateBuf
} = workerData;
var destination;
var state = new Int32Array(stateBuf);
var data = Buffer.from(dataBuf);
async function start() {
  let worker;
  try {
    if (filename.endsWith(".ts") || filename.endsWith(".cts")) {
      if (!process[Symbol.for("ts-node.register.instance")]) {
        realRequire("ts-node/register");
      } else if (process.env.TS_NODE_DEV) {
        realRequire("ts-node-dev");
      }
      worker = realRequire(decodeURIComponent(filename.replace(process.platform === "win32" ? "file:///" : "file://", "")));
    } else {
      worker = await realImport(filename);
    }
  } catch (error) {
    if ((error.code === "ENOTDIR" || error.code === "ERR_MODULE_NOT_FOUND") && filename.startsWith("file://")) {
      worker = realRequire(decodeURIComponent(filename.replace("file://", "")));
    } else if (error.code === void 0) {
      worker = realRequire(decodeURIComponent(filename.replace(process.platform === "win32" ? "file:///" : "file://", "")));
    } else {
      throw error;
    }
  }
  if (typeof worker === "object")
    worker = worker.default;
  if (typeof worker === "object")
    worker = worker.default;
  destination = await worker(workerData.workerData);
  destination.on("error", function(err) {
    Atomics.store(state, WRITE_INDEX, -2);
    Atomics.notify(state, WRITE_INDEX);
    Atomics.store(state, READ_INDEX, -2);
    Atomics.notify(state, READ_INDEX);
    parentPort.postMessage({
      code: "ERROR",
      err
    });
  });
  destination.on("close", function() {
    const end = Atomics.load(state, WRITE_INDEX);
    Atomics.store(state, READ_INDEX, end);
    Atomics.notify(state, READ_INDEX);
    setImmediate(() => {
      process.exit(0);
    });
  });
}
start().then(function() {
  parentPort.postMessage({
    code: "READY"
  });
  process.nextTick(run);
});
function run() {
  const current = Atomics.load(state, READ_INDEX);
  const end = Atomics.load(state, WRITE_INDEX);
  if (end === current) {
    if (end === data.length) {
      waitDiff(state, READ_INDEX, end, Infinity, run);
    } else {
      waitDiff(state, WRITE_INDEX, end, Infinity, run);
    }
    return;
  }
  if (end === -1) {
    destination.end();
    return;
  }
  const toWrite = data.toString("utf8", current, end);
  const res = destination.write(toWrite);
  if (res) {
    Atomics.store(state, READ_INDEX, end);
    Atomics.notify(state, READ_INDEX);
    setImmediate(run);
  } else {
    destination.once("drain", function() {
      Atomics.store(state, READ_INDEX, end);
      Atomics.notify(state, READ_INDEX);
      run();
    });
  }
}
process.on("unhandledRejection", function(err) {
  parentPort.postMessage({
    code: "ERROR",
    err
  });
  process.exit(1);
});
process.on("uncaughtException", function(err) {
  parentPort.postMessage({
    code: "ERROR",
    err
  });
  process.exit(1);
});
process.once("exit", (exitCode) => {
  if (exitCode !== 0) {
    process.exit(exitCode);
    return;
  }
  if ((destination == null ? void 0 : destination.writableNeedDrain) && !(destination == null ? void 0 : destination.writableEnded)) {
    parentPort.postMessage({
      code: "WARNING",
      err: new Error("ThreadStream: process exited before destination stream was drained. this may indicate that the destination stream try to write to a another missing stream")
    });
  }
  process.exit(0);
});
