function delay(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}
function init() {
  delay('1')
    .then((result) => {
      console.log(result);
      return delay('2');
    })
    .then((result) => {
      console.log(result);
      return delay('3');
    })
    .then(() => {
      console.log('complete');
    });
}
init();
