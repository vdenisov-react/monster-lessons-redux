// import React from 'react';
// import ReactDOM from 'react-dom';

// import * as serviceWorker from './utils/serviceWorker';
// import './index.css';

// import App from './app/App';

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();

import { createStore } from 'redux';

function playlist(state = [], action) {
    console.log('action =>', action);
    if (action.type === 'ADD_TRACK') {
        return [...state, action.payload];
    }
    return state;
}

const store = createStore(playlist);

store.subscribe(() => {
    console.log('subscribe =>', store.getState());
});

const addTrackBtn = document.querySelectorAll('.addTrack')[0];
addTrackBtn.addEventListener('click', () => {
    const trackName = document.querySelectorAll('.trackInput')[0].value;
    console.log('trackName =>', trackName);
    store.dispatch({ type: 'ADD_TRACK', payload: trackName });
});
