import { forwardRef } from 'react';

export interface TextCardProps extends React.ComponentPropsWithoutRef<'div'> {
  heading: string;
  text: string;
}

export const TextCard = forwardRef<HTMLInputElement, TextCardProps>(({ heading, text, className }, ref) => {
  return (
    <div className={`w-full p-2 border bg-primary-800 border-primary-600 rounded-8 ${className} h-full`} style={{ aspectRatio: '2/1' }}>
      <span className="text-4xl font-extrabold">{heading}</span>
      <br />
      <span className="text-xl">{text}</span>
    </div>
  );
});

TextCard.displayName = 'TextCard';
