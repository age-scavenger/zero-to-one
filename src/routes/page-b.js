import Load from './load';

const PageB = Load('page-b');

const PageBRoutes = [
  {
    path: '/page-b',
    exact: true,
    component: PageB
  }
];

export default PageBRoutes;
