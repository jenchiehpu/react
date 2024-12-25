function callback1(cb) {
  console.log('callback1');
  cb();
}

function callback2(cb) {
  console.log('callback2');
  cb();
}

function callback3(cb) {
  console.log('callback3');
  setTimeout(() => {
    cb();
  }, 1000);
}

callback1(() => {
  callback2(() => {
    callback3(() => {
      console.log('complete');
    });
  });
});
