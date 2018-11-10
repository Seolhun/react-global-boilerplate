import { ReactNode } from 'react';

import ErrorView from '../container/error';
import BusList from '../container/table/BusList';
import Hello from '../container/hello/Hello';

interface RouteType {
  path: string;
  label: string;
  component: ReactNode | null;
  depth, // 0 : anywhere
  // NotReuired
  params?: object;
  className?: string;
  level?: number;
  exact?: boolean;
  isLink?: boolean;
  onEnter?: () => any;
}

const routeCreator: (route: RouteType) => RouteType = ({
  path,
  label,
  component,
  depth, // 0 : anywhere
  // NotReuired
  params = {},
  className = '',
  level = 1,
  exact = false,
  isLink = true,
  onEnter = () => null,
}) => ({
  path,
  label,
  component,
  depth,
  params,
  className,
  level,
  exact,
  isLink,
  onEnter,
});

const schema: RouteType[] = [
  routeCreator({
    path: '/hello',
    label: 'Hello',
    component: Hello,
    exact: true,
    depth: 1,
  }),
  routeCreator({
    path: '/table',
    label: 'TablePagination',
    component: BusList,
    exact: true,
    depth: 1,
  }),
  routeCreator({
    path: '/table/pagination',
    label: 'TablePaginationView',
    component: BusList,
    exact: true,
    depth: 1,
  }),
  // Error
  routeCreator({
    path: '*',
    label: 'ErrorView',
    component: ErrorView,
    depth: 0,
    isLink: false,
  }),
];

export default schema;
