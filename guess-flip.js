import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { flipACoin } from "./modules/coin.mjs";
const args = require("minimist")(process.argv.slice(2));
args["call"];
const call = args.call;

if (call == null || (call != "heads" && call != "tails")) {
    console.error("Error: Invalid call\nUsage: node guess-flip --call=[heads|tails]");
    process.exit();
}

console.log(flipACoin(call));