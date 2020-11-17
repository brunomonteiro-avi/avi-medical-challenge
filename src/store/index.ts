import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {rootReducer as appReducer} from './reducer';
import rootSaga from './saga';

const middleware = [];

//Adding the Redux Middleware

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
if (__DEV__) {
  middleware.push(logger);
}

// Creating the store
export const store = createStore(appReducer, applyMiddleware(...middleware));

// Set root saga
sagaMiddleware.run(rootSaga);
