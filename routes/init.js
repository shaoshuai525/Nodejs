const express = require("express");
const app = express();
const path = require("path");
const staticRoot = path.resolve(__dirname, "../public");

/**
 * 下面这段代码的作用
 * 当请求时，会根据请求路径，从指定的目录中寻找是否存在改文件，如果存在，直接响应文件内容，而不再移交给后续的中间件
 * 如果不存在文件，则直接移交给后续的中间件处理
 */
app.use("/static", express.static(staticRoot));

app.use("/news", require("./errorMiddleware"));

app.get("/css/index.css", (req, res) => {
  console.log("abc");
});

const port = 3001;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
