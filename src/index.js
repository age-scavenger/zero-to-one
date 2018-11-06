/*
 * @Author: Day 
 * @Date: 2018-11-06 09:40:09 
 * @Last Modified by: Day
 * @Last Modified time: 2018-11-06 15:37:34
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './client';
import VConsole from 'vconsole';

import registerServiceWorker from './registerServiceWorker';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(<App />, MOUNT_NODE);

/**
 * 移动端调试
 */
if (process.env.NODE_ENV === 'development') {
  // const vConsole = new VConsole();
}

/**
 * 热模块替换
 */
if (module.hot) {
  module.hot.accept();
}

/**
 * PWA 离线缓存, 只在生产环境有效
 */
registerServiceWorker();
