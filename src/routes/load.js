/*
 * @Author: Day 
 * @Date: 2018-11-06 10:14:23 
 * @Last Modified by: Day
 * @Last Modified time: 2018-11-07 10:49:40
 */

import Loadable from 'react-loadable';
import Loading from '../components/common/loading';

export default page => {
  console.log(page);
  return Loadable({
    loader: () => import(`../pages/${page}/index`),
    loading: Loading
  });
};
