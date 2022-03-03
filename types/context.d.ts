export type QueryContextType = {
  query: string;
  update: (overwrite: string) => void;
};

export type Children = {
  children: React.ReactNode;
};
