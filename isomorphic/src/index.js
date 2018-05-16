import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Theme from './components/theme';

ReactDOM.render(
    <Theme>
        <App />
    </Theme>
, document.getElementById('root'));
registerServiceWorker();
