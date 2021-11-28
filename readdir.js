const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./myfiles"); //目标文件路径

async function test() {
  const paths = await fs.promises.readdir(filename);
  console.log(paths);
}

test();