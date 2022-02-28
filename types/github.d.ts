export interface CoreCommits {
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
