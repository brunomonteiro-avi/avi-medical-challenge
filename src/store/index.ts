import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {rootReducer as appReducer} from './reducer';
import rootSaga from './saga';

const middleware = [];

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
if (__DEV__) {
  middleware.push(logger);
}

export const store = createStore(appReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
