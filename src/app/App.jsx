import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    addTrack() {
        console.log('add track =>', this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    render() {
        console.log('testStore =>', this.props.testStore);

        return (
            <div className="app">
                <input
                    type="text"
                    ref={input => {
                        this.trackInput = input;
                    }}
                />

                <button onClick={this.addTrack.bind(this)}>Add track</button>

                <ul>
                    {this.props.testStore.map((track, index) => {
                        return <li key={index}>{track}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(
    // map state to props
    state => ({
        testStore: state,
    }),
    // event emitting methods
    dispatch => ({
        onAddTrack: trackName => {
            dispatch({ type: 'ADD_TRACK', payload: trackName });
        },
    }),
)(App);
