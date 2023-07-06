const fs = require("fs");

/**
 * reading files
 * */

console.log("are you waiting for me senpai");

fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log({ err });
  }
  console.log({ data: data.toString() });
});

console.log("Senpai ?");

/**
 * writing files
 * */

/**
 * diretories
 * */

/**
 * deleting files
 * */
