import type { Project } from '@Types/projects';
import { useState } from 'react';
import { matchSorter } from 'match-sorter';

export const useSearch = (apps: Project[]) => {
  const [items, setItems] = useState(apps);

  const reset = () => setItems(apps);

  const search = (query: string) => {
    if (!query || query === '*') return reset();
    const found = matchSorter(items, query, { keys: ['id', 'key', 'name', 'tags', 'owner'] });

    setItems(found);
  };

  return { items, search, reset };
};
