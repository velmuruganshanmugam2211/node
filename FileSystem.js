// // its is a default Module in node

const FileSystem = require("fs");

// // check if the folder is created or not
// if (!FileSystem.existsSync("./docs")) {
//   FileSystem.mkdir("./docs", (err) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(`Folder Created`);
//     }
//   });
// }

// if (!FileSystem.existsSync("./docs")) {
//   FileSystem.mkdir("./docs", (err) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log("Folder Created");
//     }
//   });
// } else {
//   console.log("Folder Already Exists");
// }

// Craete the File Creation Code
// FileSystem.writeFile(`./docs/File.txt`, "Hello to Node.js", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(`File Created`);
//   }
// });

// Craete the Read File Code
// if (FileSystem.existsSync(`./docs/File.txt`)) {
//   FileSystem.readFile(`./docs/File.txt`, (err, data) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(data.toString());
//     }
//   });
// }

// Craete the Delete File Code
// if (FileSystem.existsSync(`./docs/File.txt`)) {
//   FileSystem.unlink(`./docs/File.txt`, (err) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(`File Deleted`);
//     }
//   });
// }
// if (FileSystem.existsSync(`./docs/File.txt`)) {
//   FileSystem.unlink(`./docs/File.txt`, (err) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(`File Deleted`);
//     }
//   });
// }
// if (FileSystem.existsSync(`./docs/File.txt`)) {
//   FileSystem.unlink(`./docs/File.txt`, (err) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(`File Deleted`);
//     }
//   });
// }

// Craete the Delete Folder Code
// if (FileSystem.existsSync(`./docs`)) {
//   FileSystem.rmdir(`./docs`, (err) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(`Folder Deleted`);
//     }
//   });
// } else {
//   console.log(`Folder Not Found`);
// }
