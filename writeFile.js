const fs = require("fs");
const path = require("path");
const os = require("os");

const filename = path.resolve(__dirname, "./myfiles/1.txt");

// async function test() {
//   await fs.promises.writeFile(filename, "abc");
//   console.log("写入成功");
// }

async function test() {
  await fs.promises.writeFile(filename, `${os.EOL}Hello`, { //换行再写入Hello
    encoding: "utf-8", //编码格式，默认为utf-8
    flag: "a" //是否覆盖文件内原有的东西，默认覆盖，值为"a"的时候，为不覆盖
  });
  console.log("写入成功");
}

test();
