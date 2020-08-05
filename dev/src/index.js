import React from 'react';
import ReactDOM from 'react-dom';

// Component
import App from './Components/App/App';


// Additional js files
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
