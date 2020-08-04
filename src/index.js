// import React from 'react';
// import ReactDOM from 'react-dom';

// import * as serviceWorker from './utils/serviceWorker';
// import './index.css';

// import App from './app/App';

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();

import { createStore } from 'redux';

function playlist(state = []) {
    return state;
}

const store = createStore(playlist);

console.log('store =>', store.getState());
