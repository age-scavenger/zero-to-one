import React from 'react';
import ReactDom from 'react-dom';

import App from './client';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(<App />, MOUNT_NODE);
