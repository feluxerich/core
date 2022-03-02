export interface Repository {
  type: 'git';
  url: string;
}

export interface Project {
  id: number;
  key: string;
  name: string;
  route: string;
  tags: string[];
  language: string[];
  repository: Repository;
}
