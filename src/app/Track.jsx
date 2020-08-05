import React from 'react';
import { connect } from 'react-redux';

const Track = ({ track }) => {
    return (
        <div className="track-page">
            <div>{track?.name || '---'}</div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const trackId = parseInt(ownProps.match.params.id);
    return {
        track: state.tracks.find(track => track.id === trackId),
    };
};

export default connect(mapStateToProps)(Track);
