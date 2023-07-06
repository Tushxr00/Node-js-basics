const { people, ages } = require("./people");

// console.log(people, ages);

const os = require("os");

console.log({ platform: os.platform(), homedir: os.homedir() });
