import Load from './load';

const PageA = Load('page-a');

const PageARoutes = [
  {
    path: '/page-a',
    exact: true,
    component: PageA
  }
];

export default PageARoutes;
