import { takeLatest, delay, put } from 'redux-saga/effects';

export function* onIncrement() {
  yield console.log('I am incremented');
  yield delay(3000);
  yield put({ type: 'INCREMENT_FROM_SAGA' });
}

export function* incrementSaga() {
  /* Like Debounce, will only execute once during the async request (in this case the 3000ms delay above) */
  yield takeLatest('INCREMENT', onIncrement);
}
