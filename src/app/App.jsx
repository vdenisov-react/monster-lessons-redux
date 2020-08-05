import React from 'react';
import { connect } from 'react-redux';

import { getTracks } from '../store/actions/tracks.actions';

import Menu from './Menu';

const App = ({ tracks, onAddTrack, onFindTrack, onGetTracks, ownProps }) => {
    let trackInput = '';
    let searchInput = '';

    console.log('ownProps =>', ownProps);

    const addTrack = () => {
        console.log('add track =>', trackInput.value);
        onAddTrack(trackInput.value);
        trackInput.value = '';
    };

    const findTrack = () => {
        console.log('find track =>', searchInput.value);
        onFindTrack(searchInput.value);
    };

    return (
        <div className="app">
            <Menu />

            <hr />

            <div className="adding-form">
                <input type="text" ref={input => (trackInput = input)} />
                <button onClick={addTrack}>Add track</button>
            </div>

            <div className="searching-form">
                <input type="text" ref={input => (searchInput = input)} />
                <button onClick={findTrack}>Find track</button>
            </div>

            <div>
                <button onClick={onGetTracks}>Get tracks</button>
            </div>

            <ul>
                {tracks.map((track, index) => {
                    return <li key={index}>{track.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default connect(
    // map state to props
    (state, ownProps) => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
        ownProps,
    }),
    // event emitting methods
    dispatch => ({
        onAddTrack: trackName => {
            const newTrack = {
                id: Date.now().toString(),
                name: trackName,
            };
            dispatch({ type: 'ADD_TRACK', payload: newTrack });
        },
        onFindTrack: searchQuery => {
            dispatch({ type: 'FIND_TRACK', payload: searchQuery });
        },
        onGetTracks: () => {
            dispatch(getTracks());
        },
    }),
)(App);
