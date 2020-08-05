import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import * as serviceWorker from './utils/serviceWorker';
import './index.css';

import App from './app/App';
import About from './app/About';

import reducer from './store/reducers';

const hashHistory = createBrowserHistory();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
        </Router>
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
