// require("C:\\Users\\ALW-15\\Desktop\\我的\\NodeJs\\1.Node核心\\1-3.Node的模块化细节\\a.js")

// const result = require("./b.json");
// console.log(result);

// console.log(require);
// 强制转换成绝对路径
// console.log("绝对路径为：",require.resolve("./src"));


// 以下代码暂时不完全，需要日后再次看看，看明白后再补全
function require(modulePath) {
  // 1. 将modulePath转换为绝对路径
  // 2. 判断是否该模块已有缓存
  if (require.cache["绝对路径"]) {
    return "模块的运行结果";
  }
  // 3. 读取文件内容
  // 4. 包裹到一个函数中
}

const result = require("./myModule");
console.log(result);
