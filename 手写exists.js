const fs = require("fs");
const path = require("path");

const dirname = path.resolve(__dirname, "./myfiles/1"); //目标文件路径

async function exists(filename) {
  try {
    await fs.promises.stat(filename);
    return true
  } catch (err) {
    if(err.code === "ENOENT") {
      // 文件不存在
      return false;
    }
    throw err;
  }
}

async function test() {
  const result = await exists(dirname);
  if(result) {
    console.log("目录已存在");
  } else {
    await fs.promises.mkdir(dirname);
    console.log("目录创建成功");
  }
}

test();
