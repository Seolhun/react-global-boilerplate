import ErrorView from '../container/error';
import BusListContainer from '../container/table/BusListContainer';

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
    path: '/table',
    label: 'TablePagination',
    component: BusListContainer,
    exact: true,
    depth: 1,
  }),
  routeCreator({
    path: '/table/pagination',
    label: 'TablePaginationView',
    component: BusListContainer,
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
