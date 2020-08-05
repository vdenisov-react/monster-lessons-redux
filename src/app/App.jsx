import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTracks } from '../store/actions/tracks.actions';

class App extends Component {
    addTrack() {
        console.log('add track =>', this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    findTrack() {
        console.log('find track =>', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }

    render() {
        console.log('tracks =>', this.props.tracks);

        return (
            <div className="app">
                <div className="adding-form">
                    <input type="text" ref={input => (this.trackInput = input)} />
                    <button onClick={this.addTrack.bind(this)}>Add track</button>
                </div>

                <div className="searching-form">
                    <input type="text" ref={input => (this.searchInput = input)} />
                    <button onClick={this.findTrack.bind(this)}>Find track</button>
                </div>

                <div>
                    <button onClick={this.props.onGetTracks}>Get tracks</button>
                </div>

                <ul>
                    {this.props.tracks.map((track, index) => {
                        return <li key={index}>{track.name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(
    // map state to props
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
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
