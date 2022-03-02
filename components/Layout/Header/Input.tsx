import { forwardRef, useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const cn = `w-full placeholder:text-primary-300 bg-primary-700 ${className} `;

  return (
    <div className="flex items-center w-full overflow-hidden rounded-8 py-2 px-4 h-8 bg-primary-700">
      <IoSearch className="w-4 h-4 text-primary-300 mr-2" />
      <input ref={ref} className={cn} {...props} data-testid="input" />
    </div>
  );
});

Input.displayName = 'Input';
