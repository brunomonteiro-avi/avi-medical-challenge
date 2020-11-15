import {combineReducers} from 'redux';
import {default as practicesReducer} from '../features/practices/reducer';

const appReducer = combineReducers({
    practicesReducer,
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
