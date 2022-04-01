import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { flipACoin } from "./modules/coin.mjs";
const args = require("minimist")(process.argv.slice(2));
args["call"];
const call = args.call;

if (call == null || (call != "heads" && call != "tails")) {
    console.error("ERROR: Invalid call");
    process.exit(1);
}

console.log(flipACoin(call));