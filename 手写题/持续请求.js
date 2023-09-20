// 最多重试n次请求，期间成功则成功，超过n次未成功则失败。重试时间递增20ms,40ms,80ms....

function p() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
      // reject("err");
    }, 0);
  });
}

function mutiRequest(p, interval, n) {
  p().then(
    (res) => {
      console.log(res);
      console.log("end");
      return res;
    },
    (err) => {
      console.log(err);
      if (n > 0) {
        setTimeout(() => {
          mutiRequest(p, interval * 2, n - 1);
        }, interval);
      }
    }
  );
  if (n === 0) {
    console.log("end");
  }
}

mutiRequest(p, 1000, 4);
