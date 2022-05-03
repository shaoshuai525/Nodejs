const express = require("express");
const app = express();

app.get("/news/:id", (req, res) => {
  console.log("请求头", req.headers);
  console.log("请求路径", req.path);
  console.log("请求参数", req.query);
  console.log("params", req.params);

  // 设置响应头
  // res.setHeader("a", "123")
  // res.send([1,2,3])

  // 重定向
  // res.status(302).header("location", "https://duyi.ke.qq.com").end();
  // 简化版：
  // res.status(302).location("https://duyi.ke.qq.com").end();
  // 再简化版
  res.redirect(302, "https://duyi.ke.qq.com");
});

app.get("*", (req, res) => {
  console.log("123");
});

const port = 3001;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
