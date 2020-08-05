import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tracksReducer from './tracks.reducer';
import playlistsReducer from './playlists.reducer';
import filterTracksReducer from './filter-tracks.reducer';

export default combineReducers({
    routing: routerReducer,
    // ---
    tracks: tracksReducer,
    playlists: playlistsReducer,
    filterTracks: filterTracksReducer,
});
