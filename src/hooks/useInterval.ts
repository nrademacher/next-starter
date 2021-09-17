// https://github.com/vercel/next.js/tree/canary/examples/with-redux

import { useEffect, useRef } from 'react';

interface IntervalCallback {
  (...args: any): any;
}

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback: IntervalCallback, delay: number) => {
  const savedCallback = useRef<IntervalCallback>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const handler = (...args: any) => savedCallback.current?.(...args);

    if (delay !== null) {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
