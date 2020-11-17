/**
 * Actions Types
 */


export const GET_PRACTICES_REQUEST = 'GET_PRACTICES_REQUEST';
export const GET_PRACTICES_FAILURE = 'GET_PRACTICES_FAILURE';
export const GET_PRACTICES_SUCCESS = 'GET_PRACTICES_SUCCESS';
export const SET_SELECTED_PRACTICE = 'SET_SELECTED_PRACTICE';

// Get Practices
export const getPractices = () => ({
    type: GET_PRACTICES_REQUEST,
});


export const getPracticesSuccess = (payload: any) => ({
    type: GET_PRACTICES_SUCCESS,
    payload,
});


export const getPracticesFailure = (payload: any) => ({
    type: GET_PRACTICES_FAILURE,
    payload,
});

// Set Selected Practice
export const setSelectedPractice = (selectedPractice: any) => ({
    type: SET_SELECTED_PRACTICE,
    payload : {selectedPractice}
});





