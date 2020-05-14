import React from 'react';
import ReactDOM from 'react-dom';
import PWAPrompt from 'react-ios-pwa-prompt';
import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <App />
    <PWAPrompt />
  </div>,
  document.getElementById('root')
);

serviceWorker.register();
