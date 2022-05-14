export interface InsertProps {
  title: string;
  alias?: string;
}

export interface DeleteProps {
  alias: string;
}

export interface GetProps {
  alias: string;
}

export interface TodoProps {
  alias: string;
  title: string;
  todoEntries: Array;
}

export interface EntryProps {
  content: string;
  checked: boolean;
}
