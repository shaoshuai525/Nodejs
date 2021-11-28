const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./myfiles/1.txt"); //目标文件路径

async function test() {
  const stat = await fs.promises.stat(filename);
  console.log(stat);
  console.log("是否是目录：",stat.isDirectory());
  console.log("是否是文件：",stat.isFile());
}

test();
