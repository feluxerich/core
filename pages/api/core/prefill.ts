import { Octokit } from '@octokit/rest';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { owner, repo } = req.query as any;
  const octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });

  const data = (await octokit.repos.get({ owner: owner, repo: repo }))?.data;

  res.status(200).json({
    id: data.id,
    key: data.name,
    name: null,
    route: data.homepage,
    desc: data.description,
    tags: [],
    language: ['en'],
    repository: {
      type: 'git',
      url: data.html_url,
    },
    owner: data.owner.login,
  });
}
