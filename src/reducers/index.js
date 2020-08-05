import { combineReducers } from 'redux';

import tracksReducer from './tracks.reducer';
import playlistsReducer from './playlists.reducer';
import filterTracksReducer from './filter-tracks.reducer';

export default combineReducers({
    tracks: tracksReducer,
    playlists: playlistsReducer,
    filterTracks: filterTracksReducer,
});
