# promisebench
Testing promise implementation speed in nodejs (4+)

## Run tests

2 implementations are compared here right now: native vs. bluebird. To run tests:

```bash
$ time npm run test:native -- <n sequential iterations> <ms per async op>

$ time npm run test:bluebird -- <n sequential iterations> <ms per async op>
```

I ran this in node 4.4.4 and used 100 and 1000 iterations with 500ms per operation:

```
bluebird 1000 sequential iterations:
real   	8m23.458s
user   	0m0.293s
sys    	0m0.147s

native 1000 sequential iterations:
real   	8m23.292s
user   	0m0.328s
sys    	0m0.152s
```

In other words, no significant difference. Use native. :)
