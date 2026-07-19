// import fs from "fs";

// console.log(fs);

import parseArgs from "minimist";

const { time } = parseArgs(process.argv);

if (!time) {
    throw new Error("Please provide a time argument, e.g., --time=5");
}

if (!parseInt(time)) {
    throw new Error("The time argument must be a number.");
}

console.log(time);