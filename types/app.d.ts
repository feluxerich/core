export interface Repository {
  type: string;
  url: string;
}

/**
 * 0 - Local
 * 1 - Global
 */
export type AppTypes = 0 | 1;

export interface App {
  type: number;
  id: number;
  key: string;
  name: string;
  route: string;
  desc: string;
  tags: string[];
  languages: string[];
  repository: Repository;
  owner: string;
}

export type Apps = Array<App>;
