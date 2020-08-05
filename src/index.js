import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import * as serviceWorker from './utils/serviceWorker';
import './index.css';

import App from './app/App';

const initialState = {
    tracks: ['Smells like spirit', 'Enter Sandman'],
    playlists: ['My home playlist', 'My work playlist'],
};

function playlist(state = initialState, action) {
    console.log('action =>', action);
    if (action.type === 'ADD_TRACK') {
        return {
            ...state,
            tracks: [...state.tracks, action.payload],
        };
    } else if (action.type === 'DELETE_TRACK') {
        return state;
    } else if (action.type === 'ADD_PLAYLIST') {
        return state;
    } else if (action.type === 'DELETE_PLAYLIST') {
        return state;
    }
    return state;
}

const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();

// import { createStore } from 'redux';

// function playlist(state = [], action) {
//     console.log('action =>', action);
//     if (action.type === 'ADD_TRACK') {
//         return [...state, action.payload];
//     }
//     return state;
// }

// const store = createStore(playlist);

// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];

// store.subscribe(() => {
//     const arr = store.getState();
//     list.innerHTML = '';
//     arr.forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     });
// });

// addTrackBtn.addEventListener('click', () => {
//     const trackName = trackInput.value;
//     store.dispatch({ type: 'ADD_TRACK', payload: trackName });
//     trackInput.value = '';
// });
