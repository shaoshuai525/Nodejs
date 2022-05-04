const express = require("express");
const app = express();

console.log(process.env.NODE_ENV);

app.use(require("./staticMiddleware"))

app.get("/news", 
  (req, res, next) => {
    console.log("handler1");
    // res.status(200);
    // res.end()

    // throw new Error("abc");
    // 等价于
    next(new Error("abc"))

    // next();
  },
  // require("./errorMiddleware"),
);

app.get("/news", (req, res) => {
  console.log("handler3");
  res.send("123");
})

// 能匹配 /news /news/abc /news/123
// 不能匹配 /a /newsabc
app.use("/news", require("./errorMiddleware"))

const port = 3001;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
