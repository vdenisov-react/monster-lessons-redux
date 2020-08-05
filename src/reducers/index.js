import { combineReducers } from 'redux';

import tracksReducer from './tracks.reducer';
import playlistsReducer from './playlists.reducer';

export default combineReducers({
    tracks: tracksReducer,
    playlists: playlistsReducer,
});
