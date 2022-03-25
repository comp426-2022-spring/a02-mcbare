import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { coinFlips } from "./modules/coin.mjs";
const args = require("minimist")(process.argv.slice(2));
args["number"];
const number = args.number || 1;

console.log(coinFlips(number));
