export const getTracks = () => {
    return dispatch => {
        setTimeout(() => {
            console.log('tracks are received');
            dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: [] });
        }, 2000);
    };
};
