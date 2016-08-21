/**
 * Native promise implementation.
 *
 * Takes a number of ms and returns a promise
 * that resolves after that many ms
 */
module.exports = function(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms);
  });
};
