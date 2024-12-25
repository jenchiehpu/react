function delay(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}
function throwError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise error'));
    }, 1000);
  });
}
function init2() {
  delay('1')
    .then((result) => {
      console.log(result);
      return throwError();
    })
    .then((result) => {
      console.log(result);
      return delay('3');
    })
    .then(() => {
      console.log('complete');
    })
    .catch((error) => {
      console.log(error.message);
    });
}
init2();
