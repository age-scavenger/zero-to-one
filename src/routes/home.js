import Load from './load';

const Home = Load('home');

const HomeRoutes = [
  {
    path: '/',
    exact: true,
    component: Home
  }
];

export default HomeRoutes;
