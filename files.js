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

// fs.writeFile("./docs/blog1.txt", "hello, senpai", (err, data) => {
//   console.log("file was written");
// });

// fs.writeFile("./docs/blog2.txt", "hello", (err, data) => {
//   console.log("file was written");
// });

/**
 * diretories
 * */

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  //   console.log("folder already exsits");
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

/**
 * deleting files
 * */
