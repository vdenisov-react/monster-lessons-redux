const MOCK_API_TRACKS = [
    { id: 1, name: 'Enter Sandman' },
    { id: 2, name: 'Welcome Home' },
    { id: 3, name: 'Master of Puppets' },
    { id: 4, name: 'Fade to Black' },
];

export const getTracks = () => {
    return dispatch => {
        setTimeout(() => {
            console.log('tracks are received');
            dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: MOCK_API_TRACKS });
        }, 2000);
    };
};
