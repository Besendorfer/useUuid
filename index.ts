import { useState } from 'react';
import {
  v1,
  v3,
  v4,
  v5
} from 'uuid';

const uuidMap = {
  v1,
  v3,
  v4,
  v5
};

type Version = keyof typeof uuidMap;

export const useUuid = (uniqueKey: string, version: Version = 'v4') => {
  const [cache, setCache] = useState({} as Record<string, string>);

  if (!cache[uniqueKey]) {
    cache[uniqueKey] = (uuidMap[version] as (...args: any[]) => string)();
    setCache(cache);
  }

  return `${uniqueKey}-${cache[uniqueKey]}`;
};