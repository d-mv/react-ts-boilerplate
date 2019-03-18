import React from 'react';
import ReactDOM from 'react-dom';

import style from './index.scss';
import WebFont from 'webfontloader';

import App from './App';

import * as serviceWorker from './serviceWorker';

// loading fonts
WebFont.load({
  google: {
    families: ['Sniglet', 'sans-serif']
  }
});

ReactDOM.render(
  <div className={style.container}>
    <App />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
