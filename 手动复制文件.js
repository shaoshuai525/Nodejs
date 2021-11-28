const fs = require("fs");
const path = require("path");
const os = require("os");

const filename = path.resolve(__dirname, "./myfiles/1.txt"); //目标文件路径

async function test() {
  const buffer = await fs.promises.readFile(filename); //读取目标文件
  const toFilename = path.resolve(__dirname, "./myfiles/2.txt"); //复制出来的文件的路径和名字
  await fs.promises.writeFile(toFilename, buffer); //把目标文件写入到复制文件路径里
  console.log("复制成功");
}

test();
