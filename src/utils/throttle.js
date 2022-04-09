export function throttle(fn, wait) {
  let timer = null;
  return function () {
    let _this = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(_this, args);
      }, wait);
    }
  };
}

// test func
export function sayHi(id) {
  console.log("节流：", id);
}
