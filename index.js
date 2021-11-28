const { create } = require("domain");
const fs = require("fs");
const path = require("path");

class File {
  constructor(filename, name, ext, isFile, size, createTime, updateTime) {
    this.filename = filename;
    this.name = name;
    this.ext = ext;
    this.isFile = isFile;
    this.size = size;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }

  static async getFile(filename) {

  }
}

async function test() {
  const filename = path.resolve(__dirname, "./myfiles/1.txt");
  const file = await File.getFile(filename);
}

// async function readDir(dirname) {}

// async function test() {
//   const dirname = path.resolve(__dirname, "./myfiles");
//   const result = await readDir(dirname);
//   /*
//     [
//       {name: "1", isFile: false, ext: "", size: 0, getChildren: fn},
//       {name : "1.txt", isFile: true, ext: ".txt", size: 100, getChildren: fn}
//     ]
//   */
// }
