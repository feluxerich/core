export interface Repository {
  type: string;
  url: string;
}

export interface Project {
  id: number;
  key: string;
  name: string;
  route: string;
  desc: string;
  tags: string[];
  language: string[];
  repository: Repository;
  owner: string;
}
