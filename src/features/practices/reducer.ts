import * as Actions from './actions';
import { Practice } from './types'

// Initial State for Practice reducer
export const initialState: any = {
    error: null,
    loading: false,
    practices: [] as Practice[] ,
    selectedPractice: null 
};

export default function (state: any = initialState, action: any) {

    switch (action.type) {
        case Actions.GET_PRACTICES_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case Actions.GET_PRACTICES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case Actions.GET_PRACTICES_SUCCESS: {
            const { practices } = action.payload;
            return {
                ...state,
                loading: false,
                practices,
            };
        }
        case Actions.SET_SELECTED_PRACTICE: {
            const { selectedPractice } = action.payload;
            return {
                ...state,
                selectedPractice
            };
        }
        default:
            return state;
    }
}
