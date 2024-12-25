let memoryUseEffect;
const useEffect = (cb) => {
  if (!memoryUseEffect) {
    memoryUseEffect = cb;
    cb();
  }
};

function FakeComponent(newValue) {
  const value = newValue;
  console.log(`%cFakeComponent:${value}`, 'background:white;color:black;font-size:20px');
  useEffect(() => {
    setInterval(() => {
      console.log(`%ctimeout:${value}`, 'background:white;color:black;font-size:20px');
    }, 2000);
  }, []);
}

FakeComponent(0);
FakeComponent(1);
FakeComponent(2);
FakeComponent(100);
