import { Octokit } from '@octokit/rest';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const octokit = new Octokit();

  const commits = (await octokit.repos.listCommits({ owner: 'Feluxerich', repo: 'core', per_page: 100 })).data;

  const mapped = commits.map(({ sha, author, commit }) => {
    return {
      sha,
      author: {
        name: author?.login ? author?.login : null,
        avatar: author?.avatar_url ? author?.avatar_url : null,
      },
      commit: {
        // dependabot
        message: commit.message.split('\n')[0],
        url: commit.url,
        date: new Date(commit.author?.date!).getTime(),
      },
    };
  });

  res.status(200).json({
    length: mapped.length,
    data: mapped,
  });
}
