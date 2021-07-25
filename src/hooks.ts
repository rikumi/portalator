import { useCallback, useState } from 'react';

export const usePersistState = <T>(key: string, defaultValue: T) => {
  let initialState: T;
  try {
    const savedStr = localStorage.getItem(key);
    if (!savedStr) throw Error(`No persist state available for key ${key}`);
    initialState = JSON.parse(savedStr);
  } catch (e) {
    initialState = defaultValue;
  }
  const [state, setState] = useState<T>(initialState);
  const delegateSetState = useCallback((newState: T) => {
    setState(newState);
    try {
      localStorage.setItem(key, JSON.stringify(newState));
    } catch (e) { }
  }, [key]);
  return [state, delegateSetState] as const;
};
