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
    <PWAPrompt
      copyTitle="Installer Arsenic Cocktail"
      timesToShow={3}
      copyBody="Téléchargez, l'experience Arsenic Cocktail n'en sera que meilleure"
      copyShareButtonLabel="1) Appuyez sur le bouton 'partage'"
      copyAddHomeButtonLabel="2) Appuyez sur 'Sur l'écran d'accueil'"
    />
  </div>,
  document.getElementById('root')
);

serviceWorker.register();
