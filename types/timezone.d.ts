import { NextPage } from 'next';

export interface TableProps {
  timezone: string;
  name: string;
  offset: string;
}

export type BoxProps = NextPage<{ timezones: Array<string> }>;

export interface Config {
  primary: boolean;
  timezones: Array<string>;
}

export interface Zones {
  name: string;
  zone: string;
  offset: number;
}
