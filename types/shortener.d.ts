export interface LinkProps {
  link: string;
  alias: string;
  custom: boolean;
}

export interface InsertProps {
  link: string;
  alias: string;
}

export interface DeleteProps {
  alias: string;
}

export interface GetProps {
  alias: string;
}

export interface ErrorProps {
  error: string | null;
  code: number;
}

export interface ValidateInputProps extends ErrorProps {
  valid: boolean;
}
