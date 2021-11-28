const util = require("util");

// async function delay(duration = 1000) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(duration);
//     }, duration);
//   });
// }

// delay(500).then((d) => {
//   console.log(d);
// });

// const delayCallback = util.callbackify(delay);

// delayCallback(500, (err, d) => {
//   console.log(d);
// });

// ----------------------------------------------------------

function delayCallBack(duration, callback) {
  setTimeout(() => {
    callback(null, duration);
  }, duration);
}

const delay = util.promisify(delayCallBack);
// delay(500).then((d) => {
//   console.log(d);
// });
(async () => {
  const r = await delay(500);
  console.log(r);
})();

// ----------------------------------------------------------

const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

const obj2 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

console.log(util.isDeepStrictEqual(obj1, obj2));