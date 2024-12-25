import { useState, useCallback } from 'react';

type UseCounter = {
  count: number,
  onIncrement: () => void,
  onReset: () => void,
};

export default function useCounter(initialValue = 0): UseCounter {
  const [count, setCount] = useState(initialValue);
  const onIncrement = useCallback(() => {
    setCount((x) => x + 1);
  }, []);
  const onReset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);
  return { count, onIncrement, onReset };
}
