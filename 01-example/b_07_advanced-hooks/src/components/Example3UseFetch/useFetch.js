import { useEffect, useState } from 'react';

/**
 *
 * @param {Parameters<typeof fetch>[0]} input
 * @param {Parameters<typeof fetch>[1]} init
 * @returns
 */
export default function useFetch(input, init) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const abortController = new AbortController();

    fetch(input, {
      ...init,
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, [input, init]);

  return {
    data,
    isLoading,
  };
}
