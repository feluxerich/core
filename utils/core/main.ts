import { Octokit } from '@octokit/rest';
import { Commits, CommitsConfig } from '@Types/core';

class Core {
  octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });
  }

  async commits({ per_page = 20, page = 1 }: CommitsConfig = {}): Promise<Commits | null> {
    const raw = await this.octokit.repos.listCommits({ owner: 'feluxerich', repo: 'core', per_page, page });
    if (!raw.data) return null;

    return raw.data.map(({ sha, commit, author }) => ({
      sha,
      author: {
        name: author?.login ? author?.login : null,
        avatar: author?.avatar_url ? author?.avatar_url : null,
      },
      commit: {
        // dependabot & merge
        message: commit.message.split('\n')[0].split(' of https://')[0],
        url: commit.url,
        date: new Date(commit.author?.date!).getTime(),
      },
    }));
  }
}

export const core = new Core();
export default core;
