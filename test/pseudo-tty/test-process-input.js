'use strict'

const common = require('../common');
const assert = require('assert');

process.input('question here').then(common.mustCall((res) => {
  assert.strictEqual(res, 'answer');
}));
