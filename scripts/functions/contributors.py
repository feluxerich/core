import os

from github import Github, Repository, ContentFile
from dotenv import load_dotenv


class ListContributors:
    def __init__(self):
        load_dotenv()

    def __call__(self) -> None:
        g: Github = Github(os.getenv('GITHUB_SECRET'))
        repo: Repository = g.get_repo(os.getenv('GITHUB_REPO_NAME'))
        contributors: list[str] = [
            f'[{contributor.login}]({contributor.html_url})' for contributor in repo.get_contributors()
        ]
        separator: str = '\n- '
        file: ContentFile = repo.get_contents('docs/docs/contributors.md')
        content = f'# Contributors\n\n- {separator.join(contributors)}'
        if file.decoded_content.decode() == content:
            print('Nothing changed')
            return
        repo.update_file(
            path=file.path,
            message="Updated Contributors",
            content=content,
            sha=file.sha,
            branch="main"
        )

    __name__ = 'list_contributors'
