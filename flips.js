import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { coinFlips, countFlips } from "./modules/coin.mjs";
const args = require("minimist")(process.argv.slice(2));
args["number"];
const number = args.number || 1;
const flips = coinFlips(number);
console.log(flips);
console.log(countFlips(flips));
