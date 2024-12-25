// https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore
const store = {
  state: {
    count: 0,
    text: 'milkmidi',
  },
  setState: (fn) => {
    store.state = fn(store.state);
    store.listeners.forEach((listener) => {
      listener();
    });
  },
  listeners: new Set(),
  subscribe: (callback) => {
    store.listeners.add(callback);
    return () => {
      store.listeners.delete(callback);
    };
  },
  getSnapshot: () => store.state,
};
export default store;
