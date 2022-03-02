import type { Project } from '@Types/projects';
import { useState } from 'react';

import projects from '@data/projects.json';

export const useApps = () => {
  const [data, setData] = useState<Project[]>(projects.data as any);

  return data;
};
