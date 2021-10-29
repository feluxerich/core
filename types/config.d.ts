import React, { ReactChild } from 'react';

interface SidebarItemProps {
  icon?: string;
  name?: string;
  route?: string;
  external?: boolean;
  custom?: JSX.Element<any, any>;
}

interface SidebarProps {
  [key: string]: {
    [group: string]: SidebarItemProps[];
  };
}
