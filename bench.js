var argv = process.argv.slice(2)
  , implementation = argv[0]
  , times = argv[1]
  , ms = argv[2] || 500 // defaults to 500 ms per async operation
  , makePromise = require(`./${implementation}`);

function retry(i) {
  console.log(`trying ${i}`);
  var iteration = makePromise(ms);

  return iteration.then(function() {
    if (i < times) {
      return retry(i + 1);
    }
    console.log(`${i} finished for ${implementation} implementation!`);
    console.log(`${(times * ms / 1000).toFixed(3)}s of total async wait`);
  })
}

console.log(`starting ${implementation} implementation...`);
retry(1);
