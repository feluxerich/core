import { useCommits } from 'hooks/useCommits';
import moment from 'moment';
import Image from 'next/image';

const Commits = () => {
  const data = useCommits();

  return (
    <div className="flex-col w-full overflow-hidden bg-primary-800 rounded-8">
      <div className="px-4 py-3">
        <span className="text-xl font-bold">Recent commits</span>
      </div>
      <div className="w-full border-t divide-y border-primary-700 divide-primary-700">
        {data?.slice(0, 3).map(({ sha, commit, author }) => {
          return (
            <div className="flex-col items-center w-full px-4 py-2" key={sha}>
              <div className="flex items-center justify-between w-full">
                <span className="text-xs">
                  <a href="https://github.com/feluxerich/core">
                    <span className="text-primary-300">core/</span>
                    <span className="text-primary-100">main</span>
                  </a>
                </span>
                <span className="text-xs">
                  <span className="text-primary-200">{moment(commit.date).fromNow()}</span>
                </span>
              </div>
              <div className="w-full mb-1">
                <span className="text-sm font-bold">{commit.message}</span>
              </div>
              <div className="flex items-center w-full">
                <Image src={author.avatar!} alt=" " height={20} width={20} className="rounded" />
                <span className="ml-1 text-xs">{author.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full px-4 py-3 bg-primary-700">
        <a
          href="https://github.com/feluxerich/core/commits/main"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-bold hover:text-primary-200"
        >
          Show all commits
        </a>
      </div>
    </div>
  );
};

export default Commits;
