function delay(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, time);
  });
}
function init() {
  Promise.all([
    delay('1', 1000),
    delay('2', 2000),
    delay('3', 1500),
  ])
    .then((results) => {
      console.log(results);
    });

  Promise.race([
    delay('1', 1000),
    delay('2', 2000),
    delay('3', 1500),
  ])
    .then((result) => {
      console.log(result);
    });
}

init();
