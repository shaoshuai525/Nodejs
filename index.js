const express = require("express");
const app = express();

console.log(process.env.NODE_ENV);


app.get("*", (req, res) => {
  res.send("1234")
})


const port = 3001;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
})