import ErrorView from '../container/error';
import BusList from '../container/table/BusList';
import Hello from '../container/hello/Hello';

const routeCreator = ({
  path,
  label,
  component,
  // 0 : anywhere
  depth,
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

const schema = [
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
    label: 'ErrorView',
    component: ErrorView,
    depth: 0,
    isLink: false,
  }),
];

export default schema;
