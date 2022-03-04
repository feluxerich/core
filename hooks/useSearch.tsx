import type { Apps } from '@Types/app';
import { useEffect, useState } from 'react';
import { matchSorter } from 'match-sorter';

export const useSearch = (apps: Apps) => {
  const [items, setItems] = useState<Apps>([]);

  useEffect(() => {
    setItems(apps);
  }, [apps]);

  const reset = () => setItems(apps);

  const search = (query: string) => {
    if (!query || query === '*') return reset();
    const found = matchSorter(items, query, { keys: ['id', 'key', 'name', 'tags', 'owner'] });

    setItems(found);
  };

  return { items, search, reset };
};
