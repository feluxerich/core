import { useCommits } from 'hooks/useCommits';
import moment from 'moment';
import Image from 'next/image';

const Commits = () => {
  const data = useCommits();
  console.log(data);
  return (
    <div className="w-full bg-primary-800 rounded-8 overflow-hidden flex-col">
      <div className="py-3 px-4">
        <span className="font-bold text-xl">Recent commits</span>
      </div>
      <div className="border-t border-primary-700 divide-y divide-primary-700 w-full">
        {data?.slice(0, 3).map(({ sha, commit, author }) => {
          return (
            <div className="w-full flex-col items-center py-2 px-4" key={sha}>
              <div className="w-full flex justify-between items-center">
                <span className="text-xs">
                  <span className="text-primary-300">core/</span>
                  <span className="text-primary-100">main</span>
                </span>
                <span className="text-xs">
                  <span className="text-primary-200">{moment(commit.date).fromNow()}</span>
                </span>
              </div>
              <div className="w-full mb-1">
                <span className="font-bold text-sm">{commit.message}</span>
              </div>
              <div className="w-full flex items-center">
                <Image src={author.avatar!} alt=" " height={20} width={20} className="rounded" />
                <span className="text-xs ml-1">{author.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-3 px-4 w-full bg-primary-700">
        <a
          href="https://github.com/feluxerich/core/commits/main"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-base hover:text-primary-200"
        >
          Show all commits
        </a>
      </div>
    </div>
  );
};

export default Commits;
