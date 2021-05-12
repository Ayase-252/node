'use strict';

const common = require('../common');
const assert = require('assert');
const rl = require('readline');

(async () => {
  const answer = await rl.prompt('what is your favorite food?');
  assert.strictEqual(answer, 'sushi');
})().then(common.mustCall());
