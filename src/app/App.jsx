import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        console.log('testStore =>', this.props.testStore);

        return (
            <div className="app">
                <span>Hello world !</span>
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
