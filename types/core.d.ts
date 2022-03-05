export interface CommitsConfig {
  per_page?: number;
  page?: number;
}

export interface Commit {
  sha: string;
  author: {
    name: string | null;
    avatar: string | null;
  };
  commit: {
    message: string;
    url: string;
    date: number;
  };
}

export type Commits = Array<Commit>;
