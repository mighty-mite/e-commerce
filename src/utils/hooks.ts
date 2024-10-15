import { useEffect, useState } from 'react';

export function useDebounce(value: string, delay = 100) {
  const [debouncedValue, setDeboucedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDeboucedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}
