const fs = require("fs");

// Synchronous Write
// fs.writeFileSync("./03_test.txt", "Hello");

// Async
// fs.writeFile("./03_test.txt", "Hello Sandipan", (error) => {
//     console.log(error)
// });

// const result = fs.readFileSync("./03_test.txt", "utf-8");
// console.log(result);

// fs.readFile("./03_test.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });

fs.appendFileSync("./03_test.txt", new Date().getTime().toLocaleString());

fs.unlinkSync("./03_test.txt");
