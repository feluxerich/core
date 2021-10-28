import React from 'react';

const sizes = {
  '2': 'h-2 w-2',
  '4': 'h-4 w-4',
  '6': 'h-6 w-6',
};

export const Spinner: React.FC<{ size?: keyof typeof sizes }> = ({ size = '6' }) => {
  return <div className={`animate-spin  text-button ${sizes[size]} clear-both spinnerCSS`}></div>;
};
