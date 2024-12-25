import React, { useSyncExternalStore } from 'react';
import RenderTip from '@/components/RenderTip';
import store from './store';

const CountOnlyChild = React.memo(() => {
  // 不會 render 也，好神
  const count = useSyncExternalStore(store.subscribe, () => store.getSnapshot().count);
  return (
    <section data-name="useSyncExternalStore">
      <RenderTip />
      <h3>store.count:{count}</h3>
    </section>
  );
});

// https://www.youtube.com/watch?v=oPfSC5bQPR8&ab_channel=ReactConf2021
const UseExternalStoreLibraries = () => {
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot);
  return (
    <section data-name="UseSyncExternalStore1">
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button
        type="button"
        onClick={() => {
          store.setState((prevState) => ({
            ...prevState,
            text: `${Date.now()}`,
          }));
        }}
      >
        text
      </button>
      <button
        type="button"
        onClick={() => {
          store.setState((prevState) => ({
            ...prevState,
            count: state.count + 1,
          }));
        }}
      >
        increment
      </button>
      <CountOnlyChild />
    </section>
  );
};

export default UseExternalStoreLibraries;
