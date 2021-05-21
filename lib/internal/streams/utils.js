'use strict';

const {
  SymbolAsyncIterator,
  SymbolIterator,
} = primordials;

/**
 * NOTE: test error, the sematic not exactly the same. May worth to take look
=== release test-stream-pipeline ===
Path: parallel/test-stream-pipeline
node:internal/streams/pipeline:260
      throw new ERR_INVALID_ARG_TYPE(
      ^

TypeError [ERR_INVALID_ARG_TYPE]: The "transform[0]" argument must be of type function or an instance of Stream. Received an instance of Stream
    at new NodeError (node:internal/errors:363:5)
    at pipeline (node:internal/streams/pipeline:260:13)
    at Object.<anonymous> (/Users/qingyudeng/projects/node/test/parallel/test-stream-pipeline.js:375:3)
    at Module._compile (node:internal/modules/cjs/loader:1109:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1138:10)
    at Module.load (node:internal/modules/cjs/loader:989:32)
    at Function.Module._load (node:internal/modules/cjs/loader:829:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)
    at node:internal/main/run_main_module:17:47 {
  code: 'ERR_INVALID_ARG_TYPE'
}

 */
function isReadable(stream) {
  return !!stream && (typeof stream.readable === 'boolean' ||
    typeof stream.readableEnded === 'boolean' ||
    !!stream._readableState);
}

function isWritable(stream) {
  return !!stream && (typeof stream.writable === 'boolean' ||
    typeof stream.writableEnded === 'boolean' ||
    !!stream._writableState);
}


function isStream(obj) {
  return isReadable(obj) || isWritable(obj);
}

function isIterable(obj, isAsync) {
  if (obj == null) return false;
  if (isAsync === true) return typeof obj[SymbolAsyncIterator] === 'function';
  if (isAsync === false) return typeof obj[SymbolIterator] === 'function';
  return typeof obj[SymbolAsyncIterator] === 'function' ||
    typeof obj[SymbolIterator] === 'function';
}

module.exports = {
  isIterable,
  isReadable,
  isWritable,
  isStream,
};
