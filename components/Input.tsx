import { forwardRef, useEffect, useState } from 'react';
import { IoSearchOutline, IoSearch } from 'react-icons/io5';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  textarea?: boolean;
  rows?: number;
  error?: boolean;
  transparent?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, textarea, error, transparent, ...props }, ref) => {
  const bg = transparent ? `bg-transparent` : `bg-primary-800`;
  const status = error
    ? `border border-default placeholder-default text-default focus:border-default focus:ring-0`
    : 'border border-primary-600 placeholder-primary-300 text-primary-100';
  const cn = `w-full py-2 px-4 rounded-8 ${bg} ${status} ${className} `;

  return textarea ? (
    <textarea ref={ref as any} className={cn} {...(props as any)} data-testid="textarea" />
  ) : (
    <input ref={ref} className={cn} {...props} data-testid="input" />
  );
});

Input.displayName = 'Input';
