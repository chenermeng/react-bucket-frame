import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component/Hello/hello.jsx';
import getRouter from './router/router';
ReactDOM.render(
    getRouter(),
    document.getElementById('app')
);