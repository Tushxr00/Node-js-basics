const fs = require("fs");

/**
 * reading files
 * */

// console.log("are you waiting for me senpai");

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log({ err });
//   }
//   console.log({ data: data.toString() });
// });

// console.log("Senpai ?");

/**
 * writing files
 * */

fs.writeFile("./docs/blog1.txt", "hello, senpai", (err, data) => {
  console.log("file was written");
});

fs.writeFile("./docs/blog2.txt", "hello", (err, data) => {
  console.log("file was written");
});
/**
 * diretories
 * */

/**
 * deleting files
 * */
