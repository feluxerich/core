import { useQuery } from '@context/useQuery';
import { createRef, CSSProperties, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

export const Input = ({ className, ...props }: InputProps) => {
  const { update } = useQuery();
  const ref = createRef<HTMLDivElement>();

  const cn = `w-full placeholder:text-primary-300 bg-primary-700 ${className} `;

  const position = (): CSSProperties => {
    if (!ref.current) return {};

    return {
      top: `${ref.current.offsetTop + 20}px`,
      left: `${ref.current.offsetLeft}px`,
    };
  };

  useEffect(() => {
    if (!ref.current) return;

    console.log({
      top: `${ref.current.offsetTop + 20 - 10}px`,
      left: `${ref.current.offsetLeft}px`,
    });
  }, [ref]);

  return (
    <>
      {/* default */}
      <div ref={ref} className="flex items-center w-full overflow-hidden rounded-8 py-2 px-4 h-8 bg-primary-700 select-none">
        <IoSearch className="w-4 h-4 text-primary-300 mr-2" />
        <input placeholder="Search for app name, language or tags" readOnly className={cn} {...props} />
      </div>
    </>
  );
};
