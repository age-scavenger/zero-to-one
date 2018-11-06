import Load from './load';
import homeRoutes from './home';
import pageARoutes from './page-a';
import pageBRoutes from './page-b';

const NotFound = Load('not-found'); // 404,路由不匹配
const Root = Load('root'); // 根容器

const routes = [
  {
    component: Root,
    routes: [
      ...homeRoutes,
      ...pageARoutes,
      ...pageBRoutes,
      {
        path: '*',
        exact: true,
        component: NotFound
      }
    ]
  }
];

export default routes;
