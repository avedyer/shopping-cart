import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import RouteSwitch from './RouteSwitch';

ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
  document.getElementById('root')
);