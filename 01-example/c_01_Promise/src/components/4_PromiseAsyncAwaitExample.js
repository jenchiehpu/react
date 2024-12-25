// https://babeljs.io/docs/en/babel-plugin-transform-runtime
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

async function init() {
  const result1 = await delay('1');
  console.log(result1);
  const result2 = await delay('2');
  console.log(result2);
  console.log('complete');
}

async function rejectExample() {
  try {
    const result1 = await delay('1');
    console.log(result1);
    const result2 = await throwError();
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

init();
rejectExample();
