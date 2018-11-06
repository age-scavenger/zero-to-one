/*
 * @Author: Day 
 * @Date: 2018-11-06 10:14:23 
 * @Last Modified by: Day
 * @Last Modified time: 2018-11-06 10:31:23
 */

import Loadable from 'react-loadable';
import Loading from '../../components/common/Loading';

export default page => {
  console.log(page);
  return Loadable({
    loader: () => import(`../pages/${page}/index`),
    loading: Loading
  });
};
