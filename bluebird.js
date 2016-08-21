var Promise = require('bluebird')
  , p;

p = Promise.promisify(function(ms, cb) {
  setTimeout(cb, ms);
});

/**
 * Bluebird promise implementation.
 *
 * Takes a number of ms and returns a promise
 * that resolves after that many ms
 */
module.exports = function(ms) {
  return p(ms);
};
