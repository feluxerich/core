import React, { ReactChild } from 'react';
import { IconType } from 'react-icons/lib';

interface SidebarItemProps {
  icon?: IconType;
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
