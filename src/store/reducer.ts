import {combineReducers} from 'redux';
import {default as practicesReducer} from '../features/practices/reducer';

// Combine Reducer - here we can add other reducers 

const appReducer = combineReducers({
    practicesReducer,
});


//Root Reducer

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
