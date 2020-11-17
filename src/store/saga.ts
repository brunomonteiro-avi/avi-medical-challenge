import {all} from 'redux-saga/effects';
import {watchPracticesSaga} from '../features/practices/saga';

// Root Saga for all watches
export default function*() {
  yield all([
    watchPracticesSaga(),
  ]);
}
