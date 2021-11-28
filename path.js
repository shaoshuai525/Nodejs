const path = require("path");

// const basename = path.basename("asd/asd/asdasdasda/asdasd/1.html")
// console.log(basename); // 1.html

// console.log(path.sep); // \

// console.log(process.env.PATH.split(path.delimiter)); // 系统的环境变量，以分隔符分开

// const dir = path.dirname("a/b/c/d.js");
// console.log(dir); // a/b/c

// const ext = path.extname("a/b/c/d.js");
// console.log(ext); // .js

// const fullPath1 = path.join("a", "b", "c", "d.js");
// const fullPath2 = path.join("a", "b" , "../" , "d.js");
// console.log(fullPath1); // a\b\c\d.js
// console.log(fullPath2); // a\d.js

// const rel = path.relative("a/b/c/d", "a/b/e/f");
// console.log(rel); // ..\..\e\f

const absPath = path.resolve("/a.js");
console.log(absPath); // C:\a.js