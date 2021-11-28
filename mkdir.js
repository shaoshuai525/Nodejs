const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./myfiles/mkdir"); //目标文件路径

async function test() {
  await fs.promises.mkdir(filename);
  console.log("创建目录成功");
}

test();
