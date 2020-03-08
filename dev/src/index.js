import React from 'react';
import ReactDOM from 'react-dom';

// Component
import App from './App';

// style
import './reset.scss';
import './scssLib/_font.scss';

// Additional js files
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
