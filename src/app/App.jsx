import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        console.log('testStore =>', this.props.testStore);

        return (
            <div className="app">
                <input type="text" />
                <button>Add track</button>
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
    // ...
    dispatch => ({}),
)(App);
