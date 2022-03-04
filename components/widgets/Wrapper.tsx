import { ChildrenProps } from '@Types/base';
import { Children } from 'react';

const Wrapper = ({ children }: ChildrenProps) => {
  const count = Children.count(children);

  return (
    <div className="w-full mr-8 max-w-screen-fxs">
      <div className="flex items-center mb-5">
        <span className="text-xl font-bold">
          Widgets <span className="text-sm font-bold text-primary-300">({count})</span>
        </span>
      </div>
      <div className="w-full grid grid-flow-row gap-3 grid-cols-2">{children}</div>
    </div>
  );
};

export default Wrapper;
