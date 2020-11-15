import {all} from 'redux-saga/effects';
import {watchPracticesSaga} from '../features/practices/saga';

// Root Saga
export default function*() {
  yield all([
    watchPracticesSaga(),
  ]);
}
