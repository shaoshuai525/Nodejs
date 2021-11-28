const URL = require("url");

// const url = new URL.URL("https://www.baidu.com:8080/a/b/c?t=3&u=5#abc");

// console.log(url);
// console.log(url.searchParams);
// console.log(url.searchParams.has("a")); // false
// console.log(url.searchParams.has("t")); // true
// console.log(url.searchParams.get("t")); // 3


const obj = {
  href: 'https://www.baidu.com:8080/a/b/c?t=3&u=5#abc',
  origin: 'https://www.baidu.com:8080',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.baidu.com:8080',
  hostname: 'www.baidu.com',
  port: '8080',
  pathname: '/a/b/c',
  search: '?t=3&u=5',
  hash: '#abc'
}

const url = URL.format(obj);
console.log(url);